<script>
import Footer from '../components/Footer.vue'
import DropDown from '../components/DropDown.vue'

export default {
    data() {
        return {
            web: [
                "HTML/CSS","JavaScript","Python","PHP","Laravel","VueJs"
            ],
            app: [
                "C#",".NET","Python","SQL/NoSQL"
            ],
            logiciel: [
                "Visual Studio 2022","Visual Studio Code","Postman","PostgreSQL","MongoDB/Compass"
            ],
            collab: [
                "GitLab","GitHub/GitHub Desktop","Trello"
            ]
        }
    },
    components: {
        Footer,
        DropDown
    },
}
</script>

<template>
    <!-- partie présentation -->
    <div class="mt-10 mb-16 mx-4 lg:mt-24 lg:flex lg:justify-center text-white">
        <div class="h-[50%] ml-[25%] mb-4 md:w-[50%] md:mr-10 lg:ml-0 lg:w-[25%]">
            <img src="../assets/img/img_profile.JPG" alt="image profil" class="h-full rounded-lg">
        </div>
        <div class="flex flex-col w-[80%] ml-[10%] text-justify items-center lg:items-start md:w-[70%] md:ml-[15%] lg:ml-0 lg:w-[45%]">
            <p class="text-5xl mb-8 text-center md:text-left">{{ $t("profile.header") }}</p>
            <p class="mb-4 text-lg">{{ $t("profile.desc_first") }}</p>
            <p class="mb-10 text-lg">{{ $t("profile.desc_second") }}</p>
            <a :href="$t('profile.cv_path')" target="blank" class="w-[90%] md:w-[40%]">
                <button class="bg-white border-2 rounded text-black hover:bg-ocean-lightBlue hover:border-ocean-lightBlue w-full flex items-center justify-center">
                    <p class="mr-2">{{ $t("profile.cv_download") }}</p>
                    <img src="../assets/img/ouvrir.png" alt="ouvrir" class="w-[5%]">
                </button>
            </a>
        </div>
    </div>

    <!-- partie compétences -->
    <div class="text-center mb-52 text-white">
        <p class="text-5xl mb-8">{{ $t("profile.header_skill") }}</p>
        <div class="grid grid-cols-2 gap-4 md:flex md:justify-center">
            <DropDown :name="$t('skill_header.web')" :downList="web"/>
            <DropDown :name="$t('skill_header.app')" :downList="app"/>
            <DropDown :name="$t('skill_header.logi')" :downList="logiciel"/>
            <DropDown :name="$t('skill_header.collab')" :downList="collab"/>
        </div>
    </div>
    
    
    <!-- partie intérêts -->
    <!-- <div class="text-center text-white">
        <p class="text-4xl mb-8">{{  $t("profile.header_misc") }}</p>
        <p>{{ $t("profile.miscellaneous") }}</p> 
    </div> -->

    <Footer/>
</template>
