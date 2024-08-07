<script lang="ts">
    import type { ActionData } from './$types';
    import { User, Asterisk } from 'lucide-svelte'
    import { toast } from 'svelte-sonner'
    import { enhance } from '$app/forms'
    export let form: ActionData;
    
    $: if (form && !form.success) {
        toast.error(form!.message!);
    }
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<div class="card w-96 outline outline-1 bg-base-200">
        <div class="card-body">
            <div class="flex items-center justify-center flex-col">
                <h2 class="card-title">Login</h2>
                <p class="text-sm text-slate-500">It's great to see you again!</p>
            </div>
            <form method="post" use:enhance>
                <div class="flex flex-col gap-4 my-3">
                    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs bg-base-200">
                        <User />
                        <input type="text" placeholder="Username" class="grow bg-base-200" name="username" required />
                    </label>
                    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs bg-base-200">
                        <Asterisk />
                        <input type="password" placeholder="Password" class="grow bg-base-200" name="password" required />
                    </label>
                </div>
                <div class="card-actions flex">
                    <a href="/register" class="btn btn-ghost">Register</a>
                    <div class="flex-1" />
                    <button class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>