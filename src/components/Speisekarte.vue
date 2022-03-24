<template>
    <figure class="min-w-full relative">
        <img src="../assets/newrickscafe_bar.jpg" />
        <figcaption
            class="absolute bottom-8 sm:bottom-20 right-0 pt-2 pb-3 px-4 sm:px-8 ml-24 sm:ml-0 bg-transOrange border-4 border-transOrange border-r-0 rounded-tl-lg rounded-bl-lg font-serif font-bold text-white text-xl sm:text-2xl text-right italic"
        >
            Cocktails, Longdrinks und Bistro
        </figcaption>
    </figure>
    <main
        class="font-serif sm:bg-[url('/src/assets/newrickscafe_speisekarte.png')] sm:bg-no-repeat sm:bg-center-top bg-contain sm:mt-10 sm:py-10 sm:pr-7 sm:pl-6"
        id="speisekarte"
    >
        <div class="wrapper bg-beige tabs overflow-hidden px-4 text-sm sm:text-base font-serif">
            <h1 class="font-serif italic text-5xl text-center py-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 136.16 27.28"
                    class="w-28 mx-auto my-4"
                >
                    <g>
                        <path
                            class="st0"
                            d="M59.13,2.88c9.29,0.62,16.21,9.28,8.94,18.47c-7.87,7.3-19.98,6.09-27.45-0.96
		c-3.89-3.67-7.15-7.87-10.49-12.01c-5.21-6.44-12.35-8.34-19.99-6.96c-7.1,1.29-9.78,6.8-9.01,11.45c0.76,4.55,6.05,8.31,11,7.47
		c3.55-0.6,5.05-2.11,5.56-4.96c0.59-3.31-1.04-5.81-3.59-6.96c-1.86-0.84-6.36-0.84-6.52,3.03c0.24,3.4,4.25,3.9,7.06,0.92"
                        />
                        <path
                            class="st0"
                            d="M77.04,2.88c-9.29,0.62-16.21,9.28-8.94,18.47c7.87,7.3,19.98,6.09,27.45-0.96
		c3.89-3.67,7.15-7.87,10.49-12.01c5.21-6.44,12.35-8.34,19.99-6.96c7.1,1.29,9.78,6.8,9.01,11.45c-0.76,4.55-6.05,8.31-11,7.47
		c-3.55-0.6-5.05-2.11-5.56-4.96c-0.59-3.31,1.04-5.81,3.59-6.96c1.86-0.84,6.36-0.84,6.52,3.03c-0.24,3.4-4.25,3.9-7.06,0.92"
                        />
                    </g>
                </svg>
                <span>Speisekarte</span>
            </h1>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="pizza" />
                <label
                    for="pizza"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Pizza
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Margherita</div>
                        <div class="text-right">28 cm</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse) 2
                        </div>

                        <div>Salami</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,50 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Salami) 1,2,4
                        </div>

                        <div>Prosciutto</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,50 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*) 1,2,3,4
                        </div>

                        <div>Funghi Salami</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,70 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Salami, Champions) 1,2,4
                        </div>

                        <div>Hawaii</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,30 / € 6,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Ananas) 1,2,3,4
                        </div>

                        <div>Funghi Prosciutto</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,70 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Champions) 1,2,3,4
                        </div>

                        <div>Al Tonno</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,70 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Thunfisch, Zwiebeln, Paprika) 2
                        </div>

                        <div>Salami Prosciutto</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,90 / € 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Salami) 1,2,3,4
                        </div>

                        <div>Bellissimo</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,00 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Putenbrust, Ananas, Paprika, Champions) 1,2,3
                        </div>

                        <div>Solomio</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,90 / € 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Champions, Ei) 1,2,3,4
                        </div>

                        <div>Rick´s</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,00 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Chicken Chips, Zwiebeln, Paprika, Champions) 2
                        </div>

                        <div>Contadina</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,00 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Salami, Zwiebeln) 1,2,3,4
                        </div>

                        <div>Borgehese</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,00 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Hackfleisch, Paprika, Zwiebeln, Ei) 2
                        </div>

                        <div>Desiderio</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 7,00 / € 8,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse &amp; max. 5 Beläge nach Wahl) 2
                        </div>

                        <div>Calzone Schinken</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,50 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Schinken*, Champions) 1,2,3,4
                        </div>

                        <div>Calzone Hackfleisch</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 6,50 / € 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Hackfleisch, Paprika) 1,2,3,4
                        </div>
                    </div>
                </div>
            </section>

            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="vegpizza" />
                <label
                    for="vegpizza"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Pizza - vegetarisch
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Cipolla</div>
                        <div class="text-right">28 cm</div>
                        <div class="text-right">€ 5,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Zwiebeln) 2
                        </div>

                        <div>Romana</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,00 / € 5,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Peperoni, Paprika, Zwiebeln, Oliven) 2,5
                        </div>

                        <div>Al Funghi</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,50 / € 6,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Champions) 2
                        </div>

                        <div>Pommodoro</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,00 / € 6,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, Tomaten, Hirtenkäse) 2
                        </div>

                        <div>Calzone Vegetaria</div>
                        <div class="text-right">18 cm / 28 cm</div>
                        <div class="text-right">€ 5,50 / € 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Käse, verschiedene Gemüsesorten, Hirtenkäse) 2
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="pasta" />
                <label
                    for="pasta"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Pasta
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Spaghetti Bolognese</div>
                        <div class="text-right">€ 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Rinderhack)
                        </div>

                        <div class="col-span-2">Spaghetti Cabonara</div>
                        <div class="text-right">€ 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Eier, Champions, Schinken*) 1,3,4
                        </div>

                        <div class="col-span-2">Spaghetti a la Panna</div>
                        <div class="text-right">€ 6,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Schinken*, Champions) 1,3,4
                        </div>

                        <div class="col-span-2">Spaghetti Tonno</div>
                        <div class="text-right">€ 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Sahne, Zwiebeln, Thunfisch)
                        </div>

                        <div class="col-span-2">Tortellini Bolognese</div>
                        <div class="text-right">€ 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Rinderhack)
                        </div>

                        <div class="col-span-2">Tortellini al Forno</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sauce Bolognese, Sahne, Schinken*, Champions &amp; m. Käse überbacken)
                            1,3,4
                        </div>

                        <div class="col-span-2">Tortellini a la Panna</div>
                        <div class="text-right">€ 6,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Schinken*, Champions) 1,3,4
                        </div>

                        <div class="col-span-2">Tortellini in Käse-Sahnesauce</div>
                        <div class="text-right">€ 6,70</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Käse)
                        </div>

                        <div class="col-span-2">Makkaroni al Forno</div>
                        <div class="text-right">€ 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sauce Bolognese, Sahne, Schinken*, Champions &amp; m. Käse überbacken)
                            1,3,4
                        </div>

                        <div class="col-span-2">Makkaroni Spezial</div>
                        <div class="text-right">€ 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Schinken*, Champions &amp; m. Käse überbacken) 1,2,3,4
                        </div>

                        <div class="col-span-2">Makkaroni Chicken Chips</div>
                        <div class="text-right">€ 8,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Chicken Chips, Champions &amp; m. Käse überbacken) 2
                        </div>

                        <div class="col-span-2">Makkaroni Pute</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Sahnesauce, Champions, Pute) 1,3
                        </div>

                        <div class="col-span-2">Makkaroni Tonno</div>
                        <div class="text-right">€ 7,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomatensauce, Zwiebeln, Thunfisch) 1,3,4
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="laflute" />
                <label
                    for="laflute"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    La Flute
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Vegetarisch</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Champions, Zwiebeln, Paprika) 2
                        </div>

                        <div class="col-span-2">Hirtenkäse</div>
                        <div class="text-right">€ 5,70</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Hirtenkäse) 2
                        </div>

                        <div class="col-span-2">Salami</div>
                        <div class="text-right">€ 5,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Salami) 1,2,4
                        </div>

                        <div class="col-span-2">Schinken</div>
                        <div class="text-right">€ 5,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Schinken*) 1,2,3,4
                        </div>

                        <div class="col-span-2">Tonno</div>
                        <div class="text-right">€ 6,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Thunfisch, Zwiebeln) 1,2,4
                        </div>

                        <div class="col-span-2">Hawaii</div>
                        <div class="text-right">€ 6,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Käse, Ananas, Schinken*) 1,2,3,4
                        </div>

                        <div class="col-span-2">Pute</div>
                        <div class="text-right">€ 6,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Käse, Ananas, Putenbrust) 1,2,3
                        </div>

                        <div class="col-span-2">Fantasia</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Salami, Schinken*) 1,2,3,4
                        </div>

                        <div class="col-span-2">Rick´s Special</div>
                        <div class="text-right">€ 6,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Putenbrust, Hirtenkäse, Ananas) 1,3
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="croques" />
                <label
                    for="croques"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Croques
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Vegetarisch</div>
                        <div class="text-right">€ 6,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Champions, Zwiebeln, Paprika, Eisbergsalat) 2
                        </div>

                        <div class="col-span-2">Hirtenkäse</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Hirtenkäse, Eisbergsalat) 2
                        </div>

                        <div class="col-span-2">Salami</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Salami, Eisbergsalat) 1,2,4
                        </div>

                        <div class="col-span-2">Schinken</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Schinken*, Eisbergsalat) 1,2,3,4
                        </div>

                        <div class="col-span-2">Tonno</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Thunfisch, Zwiebeln, Eisbergsalat) 1,2,4
                        </div>

                        <div class="col-span-2">Hawaii</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Käse, Ananas, Schinken*, Eisbergsalat) 1,2,3,4
                        </div>

                        <div class="col-span-2">Pute</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Käse, Ananas, Putenbrust, Eisbergsalat) 1,2,3
                        </div>

                        <div class="col-span-2">Fantasia</div>
                        <div class="text-right">€ 6,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Salami, Schinken*, Eisbergsalat) 1,2,3,4
                        </div>

                        <div class="col-span-2">Rick´s Special</div>
                        <div class="text-right">€ 6,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Putenbrust, Hirtenkäse, Ananas, Eisbergsalat) 1,3
                        </div>
                        <div>
                            <p>Folgende Dressings können wahlweise zum Croque serviert werden:</p>
                            <ul>
                                <li>Knoblauch 4</li>
                                <li>Curry 1,2,4,6</li>
                                <li>Joghurt 1,2,4,6</li>
                                <li>American 1,2,4,6</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="salate" />
                <label
                    for="salate"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Salate
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Tomatensalat</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Zwiebeln, Eisbergsalat, Joghurt-Dressing) 1,2,4,6
                        </div>

                        <div class="col-span-2">Gemischter Salat</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Salat-Gurken, Zwiebeln, Eisbergsalat, Champions, Mais,
                            Joghurt-Dressing) 1,2,4,6
                        </div>

                        <div class="col-span-2">Nizza Salat</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Zwiebeln, Eisbergsalat, Ei, Thunfisch,
                            Joghurt-Dressing) 1,2,4,6
                        </div>

                        <div class="col-span-2">Hawaii Salat</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Käse, Eisbergsalat, Schinken*, Ananas,
                            Joghurt-Dressing) 1,2,4,6
                        </div>

                        <div class="col-span-2">Rick´s Salat</div>
                        <div class="text-right">€ 8,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Tomaten, Gurken, Mais, Calamares, Hirtenkäse, Käse, Chicken Chips, Ei,
                            Paprika &amp; ein Dressing nach Wahl) 2,3
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="snacks" />
                <label
                    for="snacks"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Snacks
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Riesen Currywurst</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Salatebeilage) 1,3,4
                        </div>

                        <div class="col-span-2">Frühlingsrollen</div>
                        <div class="text-right">€ 4,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (7 vegetarische Mini-Frühlingsrollen, Salatbeilage)
                        </div>

                        <div class="col-span-2">Gebackener Camembert</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Preiselbeeren, Toast, Butter, Salatbeilage)
                        </div>

                        <div class="col-span-2">Chicken Chips</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Salatbeilage, Knoblauchsauce) 4
                        </div>

                        <div class="col-span-2">Calamares</div>
                        <div class="text-right">€ 7,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Salatbeilage, Knoblauchsauce) 2,3,4
                        </div>

                        <div class="col-span-2">Portion Pommes Frites</div>
                        <div class="text-right">€ 2,90</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Ketchup oder Mayonnaise) 1,2
                        </div>

                        <div class="col-span-2">Rick´s Monster Burger</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Frikadelle, Tomaten, Röstzwiebeln, Gurken)
                        </div>

                        <div class="col-span-2">Rick´s Monster Cheeseburger</div>
                        <div class="text-right">€ 5,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Frikadelle, Käse, Tomaten, Röstzwiebeln, Gurken)
                        </div>

                        <div class="col-span-2">Baquette</div>
                        <div class="text-right">€ 3,30</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Knoblauch- oder Joghurtsauce) 1,2,4,6
                        </div>

                        <div class="col-span-2">Toast Hawaii</div>
                        <div class="text-right">€ 4,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Schinken*, Ananas, Käse, Salatbeiläge) 1,2,3,4
                        </div>

                        <div class="col-span-2">Toast Pute</div>
                        <div class="text-right">€ 4,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Pute, Ananas, Käse, Salatbeiläge) 1,2,3
                        </div>

                        <div class="col-span-2">Toast Tonno</div>
                        <div class="text-right">€ 4,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Thunfisch, Zwiebeln, Käse, Salatbeiläge) 2
                        </div>

                        <div class="col-span-2">Rick´s Toast</div>
                        <div class="text-right">€ 4,80</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (Salami, Schinken*, Paprika, Käse, Salatbeiläge) 1,2,3,4
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="schnitzel" />
                <label
                    for="schnitzel"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Schnitzel &amp; Co
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Riesen Currywurst</div>
                        <div class="text-right">€ 5,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Salatbeilage) 1,3,4
                        </div>

                        <div class="col-span-2">Riesen Currywurst Spezial</div>
                        <div class="text-right">€ 6,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Remoulade &amp; Röstzwiebeln, Salatbeilage) 1,3,4
                        </div>

                        <div class="col-span-2">Schnitzel Natur</div>
                        <div class="text-right">€ 6,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Salatbeilage) 1,3,4
                        </div>

                        <div class="col-span-2">Schnitzel Rick´s</div>
                        <div class="text-right">€ 8,00</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Käse &amp; Schinken überbacken, Sauce Hollandaise,
                            Salatbeilage) 1,3,4
                        </div>

                        <div class="col-span-2">Schnitzel TC</div>
                        <div class="text-right">€ 8,50</div>
                        <div class="col-span-3 mb-5 italic text-xs sm:text-sm">
                            (mit Pommes Frites, Käse &amp; Schinken überbacken, Sauce Hollandaise,
                            Remoulade &amp; Röstzwiebeln, Salatbeilage) 1,3,4
                        </div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="alkfrei" />
                <label
                    for="alkfrei"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Alkoholfreie Getränke
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Coca-Cola 2,9</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,20 / € 2,70</div>
                        <div>Coca-Cola light 1,2,9</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,20 / € 2,70</div>
                        <div>Fanta 1,2,3</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,20 / € 2,70</div>
                        <div>Sprite 1</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,20 / € 2,70</div>
                        <div>Spezi 1,2,3,9</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,20 / € 2,70</div>
                        <div>Mineralwasser</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,00 / € 2,50</div>
                        <div>Schweppes Bitter Lemon 3</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Schweppes Tonic Water</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Schweppes Ginger Ale 2</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Squashwater</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="saefte" />
                <label
                    for="saefte"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Säfte
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Apfelsaft / Apfelschorle</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Orangensaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Bananensaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Kirschsaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Pfirsichsaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Ananassaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                        <div>Maracujasaft</div>
                        <div class="text-right">0,3l / 0,4l</div>
                        <div class="text-right">€ 2,30 / € 2,80</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="sonstigegetraenke" />
                <label
                    for="sonstigegetraenke"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Sonstige Getränke
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Kalter Kakao</div>
                        <div class="text-right">0,4l</div>
                        <div class="text-right">€ 2,50</div>
                        <div>Vitamalz 2</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Energy Drink 2,9</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,50</div>
                        <div>Red Bull</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 3,00</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="warmegetraenke" />
                <label
                    for="warmegetraenke"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Warme Getränke
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div class="col-span-2">Becher Kaffee 9</div>
                        <div class="text-right">€ 1,90</div>
                        <div class="col-span-2">Becher Tee</div>
                        <div class="text-right">€ 1,70</div>
                        <div class="col-span-2">Milchkaffee 9</div>
                        <div class="text-right">€ 2,80</div>
                        <div class="col-span-2">Espresso 9</div>
                        <div class="text-right">€ 1,70</div>
                        <div class="col-span-2">Capuccino 9</div>
                        <div class="text-right">€ 1,90</div>
                        <div class="col-span-2">Latte Macciato 9</div>
                        <div class="text-right">€ 2,20</div>
                        <div class="col-span-2">Milchschoko</div>
                        <div class="text-right">€ 2,20</div>
                        <div class="col-span-2">Milchschoko mit Sahne</div>
                        <div class="text-right">€ 2,70</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="fassbier" />
                <label
                    for="fassbier"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Fassbier
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Krombacher</div>
                        <div class="text-right">0,3l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Krombacher</div>
                        <div class="text-right">0,4l</div>
                        <div class="text-right">€ 2,80</div>
                        <div>Krombacher</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                        <div>Krombacher Pitcher</div>
                        <div class="text-right">1,5l</div>
                        <div class="text-right">€ 8,50</div>
                        <div>Alsterwasser</div>
                        <div class="text-right">0,3l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Alsterwasser</div>
                        <div class="text-right">0,4l</div>
                        <div class="text-right">€ 2,80</div>
                        <div>Alsterwasser</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                        <div>Kilkenny</div>
                        <div class="text-right">0,3l</div>
                        <div class="text-right">€ 2,50</div>
                        <div>Kilkenny</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,50</div>
                        <div>Diesel</div>
                        <div class="text-right">0,3l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Diesel</div>
                        <div class="text-right">0,4l</div>
                        <div class="text-right">€ 2,80</div>
                        <div>Diesel</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="flaschenbier" />
                <label
                    for="flaschenbier"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Flaschenbier
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Grolsch</div>
                        <div class="text-right">0,45l</div>
                        <div class="text-right">€ 3,30</div>
                        <div>Krombacher</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Krombacher Weizen</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                        <div>Krombacher Weizen Dunkel</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                        <div>Krombacher Bananen-W.</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,30</div>
                        <div>Krombacher Kirsch-Weizen</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,30</div>
                        <div>Krombacher alkoholfrei</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Krombacher W. alkoholfrei</div>
                        <div class="text-right">0,5l</div>
                        <div class="text-right">€ 3,00</div>
                        <div>Cab Cola</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,30</div>
                        <div>Desperados</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 2,80</div>
                        <div>Peroni</div>
                        <div class="text-right">0,33l</div>
                        <div class="text-right">€ 3,30</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="longdrinks" />
                <label
                    for="longdrinks"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Longdrinks
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>SoCo Lime &amp; Cola</div>
                        <div class="text-right">4cl</div>
                        <div class="text-right">€ 4,60</div>
                        <div>Southern Comfort 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,80 / € 4,80</div>
                        <div>Amaretto Kirsch</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,50 / € 4,50</div>
                        <div>Barcadi 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,70 / € 4,60</div>
                        <div>Ballentines</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,80 / € 4,80</div>
                        <div>Amaretto Apfelsaft</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,50 / € 4,50</div>
                        <div>Campari 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,30 / € 4,20</div>
                        <div>Gin</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,30 / € 4,20</div>
                        <div>Havanna Club</div>
                        <div class="text-right">4cl</div>
                        <div class="text-right">€ 4,80</div>
                        <div>Jack Daniels</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 4,00 / € 5,00</div>
                        <div>Jim Beam</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,70 / € 4,60</div>
                        <div>Johnnie Walker 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 4,00 / € 5,00</div>
                        <div>Pernod 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,80 / € 4,80</div>
                        <div>Wodka</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,30 / € 4,20</div>
                        <div>Wodka Lemon 1,3</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 3,30 / € 4,20</div>
                        <div>Wodka Energie 2,9</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 4,00 / € 4,80</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="shots" />
                <label
                    for="shots"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Shots
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>SoCo</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,40 / € 4,00</div>
                        <div>Amaretto</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Baileys 2,9</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,40 / € 4,00</div>
                        <div>Dirty Harry 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Kleiner Feigling</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Fernet Branca</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Gin</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Jack Daniels</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,90 / € 4,20</div>
                        <div>Jägermeister</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Jim Beam</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Johnnie Walker</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,90 / € 4,20</div>
                        <div>Oldesloer Korn</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Martini 1</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Pernod 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Polar Limes 2</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Southern Comfort 2</div>
                        <div class="text-right">4cl</div>
                        <div class="text-right">€ 3,50</div>
                        <div>Saurer Apfel</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Molinari Sambuca</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€2,40 / € 4,00</div>
                        <div>Molinari Sambuca Caffe</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,40 / € 4,00</div>
                        <div>Tequila Silver / Gold</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Ouzo</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                        <div>Wodka</div>
                        <div class="text-right">2cl / 4cl</div>
                        <div class="text-right">€ 2,10 / € 3,50</div>
                    </div>
                </div>
            </section>
            <section class="tab w-full overflow-hidden mb-1">
                <input class="absolute opacity-0 -z-10" type="checkbox" id="wein" />
                <label
                    for="wein"
                    class="tab-label flex justify-between after:content-['\276F'] after:w-fit after:h-fit after:transition-all after:duration-300 cursor-pointer text-2xl text-orange p-4 bg-black bg-opacity-80 hover:bg-opacity-70 font-serif"
                >
                    Weine und Prosecco
                </label>
                <div class="tab-content max-h-0">
                    <div class="wrapper grid grid-cols-speisekarte p-5">
                        <div>Rotwein</div>
                        <div class="text-right">0,2l</div>
                        <div class="text-right">€ 3,50</div>
                        <div>Weißwein</div>
                        <div class="text-right">0,2l</div>
                        <div class="text-right">€ 3,50</div>
                        <div>Weißwein Schorle</div>
                        <div class="text-right">0,2l</div>
                        <div class="text-right">€ 3,50</div>
                        <div>Prosecco</div>
                        <div class="text-right">0,1l</div>
                        <div class="text-right">€ 2,00</div>
                    </div>
                </div>
            </section>

            <section class="text-sm">
                <h2 class="heading-speisekarte">Inhaltsstoffe</h2>
                <p class="py-3 px-5">
                    1) Konservierungsstoffe<br />2) Farbstoffe<br />3) Antioxidationsmittel<br />4)
                    Geschmacksverstärker<br />5) Geschwärzt<br />6) Glutenhaltig<br />7) Phosphat<br />8)
                    Genverändert<br />9) Koffein
                </p>
                <p class="py-3 px-5">*Koch-Hinterschinken</p>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">
#speisekarte {
    .st0 {
        fill: none;
        stroke: #000000;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }
}
// :checked
input:checked {
    + .tab-label {
        &::after {
            transform: rotate(0.25turn);
        }
    }
    ~ .tab-content {
        max-height: max-content;
    }
}
</style>
