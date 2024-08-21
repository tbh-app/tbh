<script lang="ts">
  import type { PageData, ActionData } from './$types';
  export let data: PageData;
  export let form: ActionData;

  let wordCount: string = '';
  const maxLength = 280;
</script>

{#if form}
  <div class="text-center space-y-4">
    {#if form.success}
      <h1 class="text-5xl text-green-400 font-bold animate-bounce">Sent <span class="text-green-400">successfully</span>!</h1>
      <p class="text-lg animate-bounce">Your message has been sent to {data.username}!</p>
    {:else}
      <h1 class="text-5xl font-bold">Sent <span class="text-red-400 animate-pulse">unsuccesfully</span>.</h1>
      <p class="animate-bounce">Watchu do?</p>
      <p>{form.errors}</p>
      <!-- TODO: add http.cat/400 -->
    {/if}
  </div>
{:else}
  <div class="card bg-base-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="flex justify-center items-center mt-10">
          <img src={data.imageUrl} class="w-32 h-32 rounded-full" />
      </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Send an anonymous message to {data.username}!</h2>
        <form method="post">
          <input type="hidden" name="username" value={data.username} />
          <label class="form-control">
            <textarea name="question" class="textarea textarea-bordered" placeholder="Type in your question" maxlength={maxLength} bind:value={wordCount} />
            <div class="label justify-end">
              <span class="label-text-alt flex gap-1">
                {#if wordCount.length <= maxLength}
                  {wordCount.length}
                {:else}
                  <img src="https://i.imgur.com/hklmt7q.png" class="h-4" />
                {/if}
                / 280
              </span>
            </div>
          </label>
          <div class="card-actions mt-2 justify-center">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
  </div>
{/if}
