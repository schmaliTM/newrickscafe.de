import { createRouter, createWebHistory } from "vue-router";
import StartseiteVue from "../components/Startseite.vue";
import PoolbillardVue from "../components/Poolbillard.vue";
import DartVue from "../components/Dart.vue";
import PokerVue from "../components/Poker.vue";
import SpeisekarteVue from "../components/Speisekarte.vue";
import ImpressumVue from "../components/Impressum.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: StartseiteVue,
        },
        {
            path: "/Poolbillard",
            component: PoolbillardVue,
        },
        {
            path: "/Dart",
            component: DartVue,
        },
        {
            path: "/Poker",
            component: PokerVue,
        },
        {
            path: "/Speisen-und-Getraenke",
            component: SpeisekarteVue,
        },
        {
            path: "/Impressum",
            component: ImpressumVue,
        },
    ],
});

export default router;
