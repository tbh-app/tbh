<script lang="ts">
  import Copy from "./icons/Copy.svelte";
  import Tick from './icons/Tick.svelte';
  export let username: string;
  
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  let Icon = Copy;
  const copy = () => {
    navigator.clipboard.writeText(`https://tbh.srizan.dev/${username}`);
    if (Icon === Copy) Icon = Tick;
    sleep(500).then(() => Icon = Copy);
  }
</script>

<label class="input input-bordered flex items-center gap-2" >
  <input type="text" value={`tbh.srizan.dev/${username}`} class="w-full max-w-xs bg-base-100" disabled />
  <button class="btn btn-ghost btn-sm" on:click={copy}><svelte:component this={Icon} dims={15} /></button>
</label>