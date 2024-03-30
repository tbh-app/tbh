<script lang="ts">
    let animal = 'cat'
    let inverseTernary = ''
    $: inverseTernary = animal === 'dog' ? 'cat' : 'dog'
</script>

<div class="grid place-content-center gap-2 text-center">
    <h1 class="text-3xl sm:text-5xl font-bold text-red-400">Nothing here!</h1>
    {#if animal === 'dog'}
        <img src="/404dog.webp" />
    {:else}
        <img src="https://http.cat/404.webp" />
    {/if}
    <button class='btn btn-info' on:click={() => animal = inverseTernary}>More of a {inverseTernary} person?</button>
</div>