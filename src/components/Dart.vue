<script setup>
import SliderVue from "./Slider.vue";
import KontaktVue from "./Kontakt.vue";
import OeffnungszeitenVue from "./Oeffnungszeiten.vue";
</script>

<template>
    <figure class="min-w-full relative">
        <img src="../assets/newrickscafe_darts.jpg" />
        <figcaption
            class="absolute bottom-10 sm:bottom-20 right-0 pt-2 pb-3 px-4 sm:px-8 ml-4 bg-transOrange border-4 border-transOrange border-r-0 rounded-tl-lg rounded-bl-lg font-serif font-bold text-white text-2xl italic"
        >
            10 Tunierdart-Geräte
        </figcaption>
    </figure>
    <section
        class="text-white font-sans text-md sm:text-sm leading-relaxed grid grid-cols-1 sm:grid-cols-mainAside sm:grid-rows-unevenheight sm:pt-5"
    >
        <aside
            class="flex flex-row sm:flex-col justify-evenly items-center sm:items-start sm:justify-start gap-x-4 sm:gap-0 py-8 sm:py-4 sm:col-start-1 sm:row-start-1"
        >
            <img src="../assets/newrickscafe_dartslogo.png" alt="Darts" width="250" height="298" />
            <KontaktVue />
        </aside>
        <main class="sm:col-start-2 sm:py-4 sm:row-span-2">
            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 font-serif text-3xl sm:text-[1.45rem]"
                >
                    2 Radikal Darts © Geräte
                </h3>
                <p class="py-2 px-6">
                    Radikal Darts © ist ein elektronisches Dartgerät das mit Kameras, Laser und
                    Sensoren ausgestattet ist und die Spiele auf einem 19” Monitor visualisiert.
                    Radikal Darts ©sendet automatisch und kontinuierlich alle Informationen an den
                    zentralen Server, denn nur so ist das patentierte Fernschiedsrichten möglich.
                    <span class="italic"
                        >Quelle:
                        <a href="http://deu.radikaldarts.com/" class="text-orange hover:text-white"
                            >"http://deu.radikaldarts.com/"</a
                        ></span
                    >
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    8 Tunierdart-Geräte
                </h3>
                <p class="py-2 px-6">
                    Die Automaten in unserem Lokal sind von den Firmen Löwen und Cyberdine. Wir
                    haben Platz für Darter im Raucher und Nicht-Raucherbereich.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Mittwochs für Jedermann kostenloses Darten*
                </h3>
                <p class="py-2 px-6">
                    *jeden Mittwoch ausser an Ligaspieltagen ist bei uns das Darten gegen Verzehr
                    kostenlos.
                </p>
            </article>

            <article>
                <h3
                    class="bg-black bg-opacity-60 text-orange border-b border-white py-4 px-4 mt-8 font-serif text-3xl sm:text-[1.45rem]"
                >
                    Dartmannschaften im New Rick's Café
                </h3>
                <div class="py-2 px-6">
                    <h4 class="font-black text-xl mt-2">EDSV Liga</h4>
                    <ul class="list-disc pl-5 pt-2">
                        <li>Muppets</li>
                        <li>Warenausgabe</li>
                        <li>Pink Pirates</li>
                        <li>Happy Twister</li>
                        <li>Trick 17</li>
                        <li>DC Dreisatz</li>
                        <li>Desperados</li>
                        <li>Lachsack</li>
                        <li>Die Suchsdorfer</li>
                    </ul>

                    <h4 class="font-black text-xl mt-4">Duske Liga</h4>
                    <ul class="list-disc pl-5 pt-2">
                        <li>R.E. Gedächniswurf</li>
                    </ul>

                    <h4 class="font-black text-xl mt-4">RDTO Bundesliga</h4>
                    <ul class="list-disc pl-5 pt-2">
                        <li>Expendables</li>
                    </ul>
                </div>
            </article>
        </main>

        <OeffnungszeitenVue class="sm:col-start-1 sm:row-start-2 align-self" />
    </section>
</template>
