<template>
    <section class="container container--alt">
        <h1 class="error__title" v-if="error.statusCode == 404">Page not found</h1>
        <h1 class="error__title" v-else>An error occurred</h1>
        <nuxt-link to="/" class="btn-link">Go back</nuxt-link>
    </section>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style lang="scss" scoped>
.btn-link {
    text-transform: none;
}
.error {
    &__title {
        padding-bottom: 4rem;
    }
}
</style>
