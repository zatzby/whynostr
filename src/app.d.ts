// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface LinkList {
            title: string;
            links: Link[];
        }
        interface Link {
            title: string;
            url: string;
            description: string;
        }
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
