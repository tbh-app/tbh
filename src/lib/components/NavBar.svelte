<script>
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
  import UserButton from "clerk-sveltekit/client/UserButton.svelte";
  import { dark } from '@clerk/themes';
</script>
<div class="navbar bg-base-300 mb-3">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">
        <a href="/">TBH</a>
      </a>
    </div>
    <div class="flex-none gap-2">
        <SignedIn>
          <a class="btn btn-outline" href="/dashboard">Dashboard</a>
        </SignedIn>
        <UserButton appearance={{ baseTheme: dark }} />
        <SignedOut>
          <a class="btn btn-ghost" href="/signIn">Sign in</a>
        </SignedOut>
    </div>
</div>