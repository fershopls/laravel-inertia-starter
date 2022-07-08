import './bootstrap';

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import { RegisterGlobalComponents } from "@/app/globals.js";


// Color red
InertiaProgress.init({
    color: "#29d",
    showSpinner: true,
})

createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({ methods: { route } });
        
        RegisterGlobalComponents(app);
        
        app.mount(el);
    },
});