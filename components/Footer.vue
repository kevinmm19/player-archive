<template>
    <footer class="footer" :class="css">
        <p class="footer__copyright footer__text">
            &copy; {{year}} Player Archive 
        </p>
        <p class="footer__built footer__text">
            Built by <a class="footer__author" href="https://www.linkedin.com/in/kmartinez1992/" target="_blank">Kevin Martínez M.</a>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        css: String
    },
    data: function () {
        return {
            year: '2019'
        }
    },
    mounted() {
        this.year = new Date().getFullYear();
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_mixins.scss';

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 0;
    height: 12rem;
    background-color: $footer;
    @include respond-to($tablet) {
        flex-flow: row;
        &--flex {
            position: fixed;
            bottom: 0;
            width: 50%;
        }
    }
    &__author {
        color: $mainText;
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
    &__text {
        margin: 0;
        padding-bottom: 1rem;
        color: $mainText;
        font-size: 1.3rem;
        @include respond-to($tablet) {
            &:last-of-type {
                &:before {
                    content: '|';
                    padding: 0 1rem;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
