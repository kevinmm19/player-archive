<template>
    <nuxt-link to="/" class="link">
        <font-awesome-icon :icon="icon" />
    </nuxt-link>
</template>

<script>
export default {
    name: 'LinkGoHome',
    props: {
        icon: String
    }
}
</script>

<style lang="scss" scoped>
.link {
    position: fixed;
    top: 2rem;
    left: 2rem;
    font-size: 3rem;
    z-index: 10;
}
</style>
