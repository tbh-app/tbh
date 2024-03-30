<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import "../app.css";
</script>

<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    :global(body) {
      font-family: "Inter", sans-serif;
    }
</style>

<NavBar />
<slot />