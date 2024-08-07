<script lang="ts">
  import NavBar from "$lib/components/NavBar.svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";
  import { Toaster } from 'svelte-sonner'
  export let data: LayoutData
</script>

<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    :global(body) {
      font-family: "Inter", sans-serif;
    }
</style>

<NavBar user={data.user} />
<Toaster theme="dark" />
<slot />