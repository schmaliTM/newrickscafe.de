import { createRouter, createWebHistory } from "vue-router";
import StartseiteVue from "../components/Startseite.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: StartseiteVue,
        },
    ],
});

export default router;
