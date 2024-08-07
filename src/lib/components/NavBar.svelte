<script lang="ts">
  import type { User } from 'lucia';
  export let user: User | null;

  let openModal = false
</script>
<div class="navbar bg-base-300 mb-3">
    <div class="flex-1">
      <button class="btn btn-ghost text-xl">
        <a href="/">TBH</a>
      </button>
    </div>
    <div class="flex-none gap-2">
        {#if user}
          <a class="btn btn-outline" href="/dashboard">Dashboard</a>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="avatar placeholder select-none cursor-pointer bg-neutral text-neutral-content rounded-full w-12">
              {#if user.imageUrl}
                <img src={user.imageUrl} alt="avatar" class="rounded-full w-12" />
              {:else}
                <span>{user.username}</span>
              {/if}
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content mt-2 z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
              <li><button on:click={() => openModal = true}>Set gravatar email</button></li>
              <li><a href="/api/logout">Log out</a></li>
            </ul>
          </div>
          {:else}
            <a class="btn btn-ghost" href="/login">Sign in</a>
        {/if}
      </div>
</div>

<div class="modal" class:modal-open={openModal}>
  <div class="modal-box">
    <form>
      <h3 class="font-bold text-lg">Set Gravatar email</h3>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" class="input input-bordered" placeholder="Email" />
      </div>
      <div class="modal-action">
        <button class="btn" on:click={() => openModal = false}>Close</button>
      </div>
    </form>
  </div>
</div>