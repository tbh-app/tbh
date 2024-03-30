<script lang="ts">
  import Messages from "$lib/components/dashboard/Messages.svelte";
  import UserCard from "$lib/components/dashboard/UserCard.svelte";
  import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
  import type { PageData } from './$types';
  import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
  export let data: PageData;
</script>

<ClerkLoaded let:clerk>
  <div class="flex flex-row gap-3 pl-3 pr-3 pb-3">
    <UserCard clerk={clerk} msgCount={data.questions.length} />
    <Messages messages={data.questions.map(q => q.body)} clerk={clerk} />
  </div>
</ClerkLoaded>

<ClerkLoading>
  <p>Loading!</p>
</ClerkLoading>