<script setup>
</script>
<template>
    <footer class="footer footer-center p-5 bg-ocean-abyss mt-12 text-white">
        <div>
            <div class="grid grid-cols-2 items-center gap-4 mb-4 mt-4 md:grid-cols-4">
                <div>
                    <p class="text-lg font-bold">{{ $t("contact.header") }}</p>
                </div>
                <div>
                    <ion-icon name="mail" size="large"></ion-icon>
                    <p class="ml-2">janelle.genonceau@gmail.com</p>
                </div>
                <div>
                    <a href="https://github.com/Genoncej" target="_blank"><ion-icon name="logo-github" size="large"></ion-icon></a>
                    <p>Jane/Genoncej</p>
                </div>
                <div class="md:col-auto">
                    <a href="https://www.linkedin.com/in/janelle-genonceau/" target="_blank"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
                    <p>Janelle GENONCEAU</p>
                </div>
            </div>
            <p> {{ $t("home.created_by") }}</p>
        </div> 
    </footer>
</template>