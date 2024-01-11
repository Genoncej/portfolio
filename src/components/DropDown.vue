<script setup>
defineProps({
    name: {
        type: String
    },
    downList: {
        type: Array
    }
})
</script>
<template>
    <div class="dropdown dropdown-bottom text-black">
        <div tabindex="0" role="button" class="btn btn-info bg-white m-1 text-black text-lg">{{name}}</div>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-ocean-lightBlue rounded-box w-44 text-lg">
            <div v-for="list in downList">
                <p>{{ list }}</p>
            </div>
        </div>
    </div>
</template>