<script setup>
import KontaktVue from "./Kontakt.vue";
import OeffnungszeitenVue from "./Oeffnungszeiten.vue";
</script>

<template>
    <figure class="min-w-full relative">
        <img src="../assets/newrickscafe.jpg" />
        <figcaption
            class="absolute bottom-10 sm:bottom-20 right-0 pt-2 pb-3 px-4 sm:px-8 ml-4 bg-transOrange border-4 border-transOrange border-r-0 rounded-tl-lg rounded-bl-lg font-serif font-bold text-white text-2xl italic"
        >
            Das New Rick's Café
        </figcaption>
    </figure>

    <section
        class="text-white font-sans text-md sm:text-sm leading-relaxed grid grid-cols-1 sm:grid-cols-mainAside sm:grid-rows-unevenheight sm:pt-5"
    >
        <aside
            class="flex flex-row sm:flex-col justify-evenly items-center sm:items-start sm:justify-start gap-x-4 sm:gap-0 py-8 sm:py-4 sm:col-start-1 sm:row-start-1"
        >
            <img src="../assets/happyhour.png" alt="Happy Hour" width="250" height="298" />
            <KontaktVue />
        </aside>
        <main class="sm:col-start-2 sm:py-4 sm:row-span-2">
            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Happy Hour im New Rick's Café
                </h3>
                <p class="py-2 px-6">
                    Bei uns gibt es Longdrinks. Freitag und Samstag ab 24 Uhr diverse alkoholische
                    Getränke zu Happy Hour-Tarifen.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Mittwoch ist Cocktailtag
                </h3>
                <p class="py-2 px-6">
                    Kommt uns am Montag besuchen und kostet diverse Cocktails für nur 4,80€.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    100qm Raucherlounge
                </h3>
                <p class="py-2 px-6">
                    Wir haben für unsere Raucher eine 100qm Raucherlounge mit Dartgeräten, große
                    Tischen und Pokertischen eingerichtet. Alle Billardtische befinden sich im
                    Nicht-Raucherbereich.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Jeden Donnerstag Ranglistentuniere von Poker&People Kiel e.V.
                </h3>
                <p class="py-2 px-6">
                    Unser lokaler Poker-Verein Poker&People Kiel e.V. richtet jeden Donnerstag
                    Ranglistentuniere in unserem Lokal aus. Anmeldung jeden Donnerstag bis 19.00 Uhr
                    im New Rick's Café.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Das New Rick's Café im Internet
                </h3>
                <p class="py-2 px-6">
                    Wir hoffen euch gefällt das neue Design unserer Website. Für Fragen und Kritik
                    sind wir immer unter info@newrickscafe.de zu erreichen. Euer New Rick's Café
                    Team
                </p>
            </article>
        </main>

        <OeffnungszeitenVue class="sm:col-start-1 sm:row-start-2" />
    </section>
</template>
