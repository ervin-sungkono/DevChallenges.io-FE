<script setup>
    defineProps(['visibilityTypes', 'visibility'])
    defineEmits(['change-visibility'])
</script>

<template>
    <div class="tab-group">
        <div v-for="type in visibilityTypes" :class="{ active: type === visibility }" @click="$emit('change-visibility', type)">
            {{type[0].toUpperCase() + type.substring(1)}}
        </div>
    </div>
</template>

<style>
    .tab-group{
        display: flex;
        border-bottom: 1px solid #BDBDBD;
    }
    .tab-group > div{
        position: relative;
        cursor: pointer;
        flex-grow: 1;
        padding-block: 1.25rem;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
    }
    .tab-group > .active::after{
        content: "";
        position: absolute;
        width: 75%;
        height: 4px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px 4px 0 0;
        background-color: #2F80ED;

    }
</style>