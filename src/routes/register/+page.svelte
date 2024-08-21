<script lang="ts">
    import type { ActionData } from './$types';
    import User from 'lucide-svelte/icons/user';
    import Asterisk from 'lucide-svelte/icons/asterisk';
    import { toast } from 'svelte-sonner'
    import { enhance } from '$app/forms'
    export let form: ActionData;
    
    $: if (form && !form.success) {
        toast.error(form!.message);
    }
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<div class="card w-96 outline outline-1 bg-base-200">
        <div class="card-body">
            <div class="flex items-center justify-center flex-col">
                <h2 class="card-title">Sign up</h2>
                <p class="text-sm text-slate-500">Let's start your anonymous question page!</p>
            </div>
            <form method="post" use:enhance>
                <div class="flex flex-col gap-4 my-4">
                    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs bg-base-200">
                        <User />
                        <input type="text" placeholder="Username" class="grow bg-base-200" name="username" />
                    </label>
                    <label class="input input-bordered flex items-center gap-2 w-full max-w-xs bg-base-200">
                        <Asterisk />
                        <input type="password" placeholder="Password" class="grow bg-base-200" name="password" />
                    </label>
                </div>
                <div class="card-actions flex">
                    <a href="/login" class="btn btn-ghost">Login</a>
                    <div class="flex-1" />
                    <button class="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
</div>