<template>
    <header class="header">
        <Search />
    </header>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
    name: 'Header',
    components: {
        Search
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.header {
    position: fixed;
    padding: 2rem 0;
    width: 100%;
    background-color: $header;
    z-index: 10;
    box-shadow: 0 1.5rem 1rem -1.5rem $otherText;
}
</style>
