<template>
    <p class="message" :class="css">{{msg}}</p>
</template>

<script>
export default {
    name: 'Message',
    props: {
        msg: String,
        css: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.message {
    font-size: 1.8rem;
    color: $mainText;
    background-color: transparent;
    &--big {
        font-size: 4rem;
    }
}
</style>
