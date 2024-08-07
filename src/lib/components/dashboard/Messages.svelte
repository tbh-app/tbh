<script lang="ts">
  import type { User } from "lucia";
  import Link from "../Link.svelte";
  import Message from "./messages/Message.svelte";
  export let messages: Array<string>
  export let user: User;
</script>

<div class="card w-full bg-base-200 shadow-xl card-full-height overflow-scroll">
    <div class="card-body">
      {#if messages.length === 0}
        <p class="text-center text-sky-500 text-2xl font-bold">
          You have no messages!
          Why not post your link?
        </p>
        <div class="sm:hidden">
          <Link username={user.username} />
        </div>
      {/if}
      {#each [...messages] as msg}
        <Message msg={msg} />
      {/each}
    </div>
</div>