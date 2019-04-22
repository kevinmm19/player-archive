<template>
    <form @keydown.enter.prevent="debounceFind" class="search__form">
        <span class="search__label" aria-label="Search for a player" role="img">
            <font-awesome-icon icon="search" />
        </span>
        <input class="search__input" @input.prevent="debounceFind" placeholder="Type a name..." autofocus ref="searchInput" v-model="search">
        <button class="button search__reset" v-if="search.length" @keydown.enter="reset" @click="reset" aria-label="Clean search input">
            <font-awesome-icon icon="times" />
        </button>
    </form>
</template>

<script>
import { FETCH_PLAYER, SET_FLAGS } from '@/assets/js/constants';

export default {
    name: 'Search',
    data: function () {
        return {
            search: '',
            timeout: 0
        }
    },
    mounted() {
        this.debounceFind = this.debounce(this.find, 200);
    },
    destroyed() {
        clearTimeout(this.timeout);
    },
    methods: {
        debounce(func, wait, immediate) {
            return function() {
                let context = this, args = arguments;
                let later = () => {
                    this.timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                let callNow = immediate && !this.timeout;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },
        async find() {
            try {
                const query = this.search.trim().toLowerCase().replace(/[|&;$%@"<>()+=,]/g, '');
                if(query !== '') {
                    this.$store.commit({ type: SET_FLAGS, error: false, loading: true });
                    await this.$store.dispatch(FETCH_PLAYER, { search: query });
                }
                
            } catch (error) {
                return this.$nuxt.error({ statusCode: 500 });
            }
        },
        reset() {
            this.timeout = 0;
            this.search = '';
            this.$refs.searchInput.focus();
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    &__form {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__label {
        position: relative;
        top: .2rem;
        color: $mainText;
        padding-right: 1rem;
        font-size: 2rem;
    }
    &__input {
        height: 3.5rem;
        padding: 0.5rem;
        width: 65%;
        font-size: 1.6rem;
        @include respond-to($tablet) {
            width: 50%;
        }
    }
    &__reset {
        width: 3rem;
        height: 3.5rem;
        color: $mainText;
        font-size: 2rem;
        border: 0;
        outline: 0;
        background-color: transparent;
        cursor: pointer;
        &:hover,
        &:focus {
            color: darken($mainText, 10%);
        }
    }
    .fa-search,
    .fa-times {
        width: 2.5rem;
        height: 2.5rem;
        color: $mainText;
        transform: rotate(90deg);
    }
}
</style>
