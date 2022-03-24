<template>
    <nav class="font-Gothic text-white text-xl sm:text-base text-center">
        <div class="px-5 pt-8 pb-4 sm:pb-4 sm:pl-0 sm:pt-5">
            <a href="/">
                <img
                    src="../assets/newrickscafe.svg"
                    alt="New Rick's Cafe"
                    width="425"
                    height="113"
                />
            </a>
        </div>
        <input class="absolute opacity-0 -z-10" type="checkbox" id="navigation" />
        <label
            for="navigation"
            class="relative py-2 tab-label text-orange hover:after:text-white block sm:hidden after:content-['\2261'] after:absolute after:top-[4px] after:text-3xl after:right-6 cursor-pointer bg-black bg-opacity-50"
            >Menu</label
        >
        <ul
            class="tab-content max-h-0 sm:max-h-fit sm:py-3 overflow-hidden flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-5 sm:justify-center bg-black bg-opacity-50"
        >
            <router-link to="/" class="hover:text-orange">Startseite</router-link>

            <router-link class="sm:inline hover:text-orange" to="/Poolbillard"
                >Poolbillard</router-link
            >
            <router-link class="sm:inline hover:text-orange" to="/Dart">Dart</router-link>
            <router-link class="sm:inline hover:text-orange" to="/Poker">Poker</router-link>
            <router-link class="sm:inline hover:text-orange" to="/Speisen-und-Getraenke"
                >Speisen und Getränke</router-link
            >
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.router-link-active {
    color: orange;
}

.tab-content {
    transition: all 0.35s;
}
input:checked {
    + .tab-label {
        &::after {
            content: "+";
            transform: rotate(45deg);
            right: 1.25rem;
        }
    }
    ~ .tab-content {
        max-height: max-content;
        padding: 0.6rem 1rem 1rem;
    }
}
</style>
