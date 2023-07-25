<script lang='ts'>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import ndk from "$lib/stores/ndk";
    import currentUser from "$lib/stores/currentUser";
    import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
    import { dateTomorrow } from '$lib/utils/helpers';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import toast, { Toaster } from 'svelte-french-toast';
    import Footer from "$lib/components/Footer.svelte";

    let savestore = false;

    $: if (savestore && $currentUser) {
        // Get the user
        window.sessionStorage.setItem('whyNostrCurrentUser', JSON.stringify($currentUser));
    }

    if (browser)   {
        const storedUser = window.sessionStorage.getItem('whyNostrCurrentUser');
        if (storedUser) {
            currentUser.set(JSON.parse(storedUser));
            document.cookie = `userNpub=${
                $currentUser?.npub
            }; expires=${dateTomorrow()}; SameSite=Lax; Secure`;
        }
        savestore = true;
    }

    async function login(domEvent: any) {
        const signer = new NDKNip07Signer();
        $ndk.signer = signer;
        ndk.set($ndk);
        signer.user().then(async (ndkUser) => {
            if (!!ndkUser.npub) {
                ndkUser.ndk = $ndk;
                currentUser.set(ndkUser);
                window.sessionStorage.setItem('whyNostrCurrentUser', JSON.stringify(ndkUser));
                document.cookie = `userNpub=${ndkUser.npub};
                expires=${dateTomorrow()}; SameSite=Lax; Secure`;
                toast.success("Logged in");
            }
        });

        if (domEvent?.detail?.redirect) goto(domEvent.detail.redirect);
    }

    function logout(e: Event) {
        e.preventDefault();
        currentUser.set(undefined);
        window.sessionStorage.removeItem('whyNostrCurrentUser');
        document.cookie = 'userNpub=';
        goto('/');
    }
</script>

<Toaster />
<Header on:login={login} on:logout={logout} />
<div class='container mx-auto my-8 prose px-8 md:px-0 lg:prose-2xl dark:prose-invert'>
    <slot />
</div>
<Footer />