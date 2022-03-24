<script setup>
import SliderVue from "./Slider.vue";
import KontaktVue from "./Kontakt.vue";
import OeffnungszeitenVue from "./Oeffnungszeiten.vue";
</script>

<template>
    <figure class="min-w-full relative">
        <img src="../assets/fotolia_29313274.jpg" />
        <figcaption
            class="absolute bottom-10 sm:bottom-20 right-0 pt-2 pb-3 px-4 sm:px-8 ml-4 bg-transOrange border-4 border-transOrange border-r-0 rounded-tl-lg rounded-bl-lg font-serif font-bold text-white text-2xl italic"
        >
            12 Poolbillardtische
        </figcaption>
    </figure>
    <section
        class="text-white font-sans text-md sm:text-sm leading-relaxed grid grid-cols-1 sm:grid-cols-mainAside sm:grid-rows-unevenheight sm:pt-5"
    >
        <aside
            class="flex flex-row sm:flex-col justify-evenly items-center sm:items-start sm:justify-start gap-x-4 sm:gap-0 py-8 sm:py-4 sm:col-start-1 sm:row-start-1"
        >
            <img
                src="../assets/newrickscafe_billardlogo.png"
                alt="Billard"
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
                    Montags ist die erste Stunde umsonst*
                </h3>
                <p class="py-2 px-6">
                    *jeden Montag wird die erste Stunde bei Verzehr nicht berechnet. Bestellt euch
                    einen unserer handgemixten Cocktails oder unserer wunderbaren Pizzen, Pasta,
                    Burger oder Salate und spielt die erste Stunde umsonst.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Mittwochs ist Pärchen-Abend
                </h3>
                <p class="py-2 px-6">
                    Wenn Ihr am Mittwoch als Paar kommt, ist für euch die erste Stunde Billard bei
                    Verzehr umsonst.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Billard in Kiel Suchsdorf
                </h3>
                <p class="py-2 px-6">
                    Im New Rick's Café spielt Ihr an 12 Powderblue bezogenen Poolbillardtischen (9
                    Fuß) der Firma Brunswik. Für eine Stunde Billard bezahlt Ihr Vormittags bis
                    18:00 Uhr 4,50€ und ab 18:00 Uhr 7,00€.
                </p>
            </article>
        </main>

        <OeffnungszeitenVue class="sm:col-start-1 sm:row-start-2" />
    </section>
</template>
