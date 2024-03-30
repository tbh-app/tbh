<script lang="ts">
  import Info from "$lib/components/icons/Info.svelte";
  export let msg: string;
  let openModal = false
</script>

<div class="card bg-base-300 hover:shadow-md hover:shadow-sky-200 hover:border hover:border-sky-300 transform transition duration-300 hover:scale-[1.02]">
  <div class="card-body relative">
    <p class="truncate whitespace-nowrap w-11/12">
      {msg}
    </p>
    <div class="absolute top-5 right-10">
      <button class="btn" on:click={() => openModal = true}>
        <Info dims={20} />
      </button>
    </div>
  </div>
</div>

<div class="modal" class:modal-open={openModal}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">TBH message</h3>
    <p class="py-4">{msg}</p>
    <div class="modal-action">
      <button class="btn" on:click={() => openModal = false}>Close</button>
    </div>
  </div>
</div>