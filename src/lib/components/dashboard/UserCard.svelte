<script lang="ts">
  import type { User } from "lucia";
  import Link from "../Link.svelte";

  // this feels wrong
  export let user: User;
  export let msgCount: number;
</script>

<div class="card w-96 bg-base-200 shadow-xl card-full-height hidden md:flex flex-col items-center justify-center">
  <div>
    <img src={user.imageUrl} class="rounded-box mx-auto mt-4 h-[13rem] w-[13rem] shadow-xl" />
    <div class="card-body text-center">
      <h2 class="text-2xl font-bold">Hey {user.username}!</h2>
      <p>You have <span class="font-bold">{msgCount}</span> messages!</p>
      <Link username={user.username} />
    </div>
  </div>
</div>