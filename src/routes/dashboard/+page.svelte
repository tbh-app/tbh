<script lang="ts">
  import Messages from "$lib/components/dashboard/Messages.svelte";
  import UserCard from "$lib/components/dashboard/UserCard.svelte";
  import type { PageData } from './$types';
  export let data: PageData;
</script>

{#if data.user}
  <div class="flex flex-row gap-3 pl-3 pr-3 pb-3">
    <UserCard user={data.user} msgCount={data.questions.length} />
    <Messages messages={data.questions.map(q => q.body)} user={data.user} />
  </div>
{/if}