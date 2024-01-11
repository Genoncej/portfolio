<script setup>
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="text-center mt-10 md:mt-24 mb-24 text-white">
        <p class="text-5xl mb-10">{{ $t("exp_first.header") }}</p>
        <div class="grid grid-cols-1 ml-2.5 gap-4 mr-2.5 text-left lg:grid-cols-2">       
            <Card :title="$t('exp_first.exp_title')" 
                :desc="$t('exp_first.exp_desc')" 
                :img="$t('exp_first.exp_img')" :technos="$t('exp_first.exp_technos')"/>
            <Card :title="$t('exp_second.exp_title')" 
                :desc="$t('exp_second.exp_desc')" 
                :img="$t('exp_second.exp_img')" :technos="$t('exp_second.exp_technos')" />
            <Card :title="$t('exp_third.exp_title')" 
                :desc="$t('exp_third.exp_desc')" 
                :img="$t('exp_third.exp_img')" :technos="$t('exp_third.exp_technos')" />
        </div>
    </div>

    <div class="text-center text-white">
        <p class="text-5xl mb-10">{{ $t("school_first.header") }}</p>
        <div class="grid grid-cols-1 ml-2.5 gap-4 mr-2.5 text-left lg:grid-cols-2">       
            <Card :title="$t('school_first.school_title')" 
                :desc="$t('school_first.school_city')" 
                :img="$t('school_first.school_img')" :technos="$t('school_first.school_date')"/>
            <Card :title="$t('school_second.school_title')" 
                :desc="$t('school_second.school_city')" 
                :img="$t('school_second.school_img')" :technos="$t('school_second.school_date')" />
        </div>
    </div>

    <Footer/>
</template>