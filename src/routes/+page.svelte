<script lang="ts">
    import { onMount } from 'svelte';
    import { toast } from 'svelte-sonner';
    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('lo') === '') {
            toast.success('Logged out successfully');
        }
        console.log('asdf', urlParams.get('lo'))
    });
</script>

<div class="items-center justify-center">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">insert landing page here</h1>
    <p class="mb-8 text-lg text-gray-600 dark:text-gray-400 text-center justify-end">bottom text</p>
</div>
