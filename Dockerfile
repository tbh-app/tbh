FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
RUN yarn install

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/static static/
COPY --from=builder /app/db db/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/drizzle.config.json drizzle.config.json
COPY --from=builder /app/src src/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "prod"]