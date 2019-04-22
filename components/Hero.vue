<template>
    <section class="hero">
        <h1 class="hero__title">Player Archive</h1>
        <h2 class="hero__subtitle">Check out your favorite players</h2>
    </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.hero {
    position: relative;
    padding: 12.5rem 1.5rem 7.5rem;
    background-color: $gradientAlt;
    background: linear-gradient(180deg, $gradientAlt, $gradientMain);
    box-shadow: 0 1.5rem 1rem -1.5rem $gradientAlt;
    &__title {
        color: $mainText;
        font-size: 3rem;
        letter-spacing: .1rem;
    }
    &__subtitle {
        padding: .5rem 0;
        font-size: 2rem;
        color: $mainText;
        font-weight: normal;
        letter-spacing: .05rem;
    }
}
</style>
