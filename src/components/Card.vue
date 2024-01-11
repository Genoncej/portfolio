<script setup>
defineProps({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    img: {
        type: String
    },
    technos: {
        type: String
    }
})
</script>
<template>
    <div class="card card-side bg-white text-black">
        <div class="card-body w-[95%]">
            <p class="card-title">{{title}}</p>
            <p class="text-justify">{{desc}}</p>
            <div class="divider divider-neutral m-0"></div>
            <p class="text-left font-bold">{{ technos }}</p>

        </div>
        <figure class="w-[30%] p-1 md:w-[35%] md:p-4"><img :src="`${img}`" alt="img"/></figure>
    </div>
</template>