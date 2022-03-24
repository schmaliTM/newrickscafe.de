<template>
    <section class="text-white flex justify-center mt-8 sm:mt-0 max-h-[200px]">
        <div class="tafel bg-[url('./src/assets/fotolia_30445658.png')] bg-no-repeat py-9 px-10">
            <h1 class="font-serif text-2xl">Öffnungszeiten</h1>
            <table class="text-[0.9rem]">
                <tbody>
                    <tr>
                        <td class="oh-day" style="text-align: left">Mo. – Do.</td>
                        <td style="text-align: left" dir="ltr">16:00-01:00</td>
                    </tr>
                    <tr>
                        <td class="oh-day" style="text-align: left">Freitag</td>
                        <td style="text-align: left" dir="ltr">16:00-03:00</td>
                    </tr>
                    <tr class="oh-highlight-day">
                        <td class="oh-day" style="text-align: left">Samstag</td>
                        <td style="text-align: left" dir="ltr">14:00-03:00</td>
                    </tr>
                    <tr>
                        <td class="oh-day" style="text-align: left">Sonntag</td>
                        <td style="text-align: center" dir="ltr">15:00-23:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
