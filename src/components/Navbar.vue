<script>
import LanguageSwitcher from "@/components/LanguageSwitch.vue"

export default {
    components: { LanguageSwitcher }
}

</script>
<template>
    <div class="navbar bg-ocean-sea">
        <div class="navbar-start">
            <img src="../assets/img/plumes.png" alt="plume" class="w-[15%] md:w-[8%] lg:w-[5%]">
        </div>
        <div class="navbar-end font-bold text-white">
            <div class="pr-2 hover:text-ocean-darkBlue">
                <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
            </div>
            <div class="pr-2 hover:text-ocean-darkBlue">
                <RouterLink to="/profile">{{ $t("nav.profil") }}</RouterLink>
            </div>
            <div class="pr-2 hover:text-ocean-darkBlue">
                <RouterLink to="/experience">{{ $t("nav.experience") }}</RouterLink>
            </div>
            <div class="hover:text-ocean-darkBlue">
                <LanguageSwitcher></LanguageSwitcher>
            </div>
        </div>
    </div>
</template>
  