<script setup>
import SliderVue from "./Slider.vue";
import KontaktVue from "./Kontakt.vue";
import OeffnungszeitenVue from "./Oeffnungszeiten.vue";
</script>

<template>
    <figure class="min-w-full relative">
        <img src="../assets/newrickscafe_poker_nichtraucherlounge.jpg" />

        <figcaption
            class="absolute bottom-8 sm:bottom-20 right-0 pt-2 pb-3 px-4 sm:px-8 ml-24 sm:ml-0 bg-transOrange border-4 border-transOrange border-r-0 rounded-tl-lg rounded-bl-lg font-serif text-right font-bold text-white text-xl sm:text-2xl italic"
        >
            Pokertische für bis zu 100 Personen
        </figcaption>
    </figure>
    <section
        class="text-white font-sans text-md sm:text-sm leading-relaxed grid grid-cols-1 sm:grid-cols-mainAside sm:grid-rows-['545px max-content'] sm:pt-5"
    >
        <aside
            class="flex flex-row sm:flex-col justify-evenly items-center sm:items-start sm:justify-start gap-x-4 sm:gap-0 py-8 sm:py-4 sm:col-start-1 sm:row-start-1"
        >
            <img
                src="../assets/pokerandpeople.png"
                alt="Poker & People e.V."
                width="250"
                height="298"
            />
            <KontaktVue />
        </aside>
        <main class="sm:col-start-2 sm:py-4 sm:row-span-2">
            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 font-serif text-3xl sm:text-[1.45rem]"
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
                    Ab 30€ Verzehr kostenlos Pokern
                </h3>
                <p class="py-2 px-6">
                    wenn Ihr an einem Tisch für 30,00 € Speisen und Getränke bestellt ist die
                    Nutzung der Pokertische komplett kostenlos. Ohne Speisen und Getränke bezahlt
                    Ihr 5,00 € pro Stunde inkl. Chips und Karten.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Poker im New Rick's Café
                </h3>
                <p class="py-2 px-6">
                    Wir haben in Kooperation mit Poker&People Kiel e.V. Platz für bis zu 100
                    Spieler. Platz ist im Raucher und Nicht-Raucherbereich.
                </p>
            </article>
        </main>

        <OeffnungszeitenVue class="sm:col-start-1 sm:row-start-2" />
    </section>
</template>
