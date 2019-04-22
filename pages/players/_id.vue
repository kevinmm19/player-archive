<template>
    <div>
        <PlayerWrapper :player="profile" />
        <Footer :css="'footer--flex'" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { FETCH_PROFILE } from '@/assets/js/constants';
import Footer from '@/components/Footer.vue';
import PlayerWrapper from '@/components/PlayerWrapper.vue';

export default {
    name: 'id',
    components: {
        Footer,
        PlayerWrapper
    },
    async fetch({ store, params, error }) {
        try {
            await store.dispatch(FETCH_PROFILE, { id: params.id });
        } catch (err) {
            return error({ statusCode: 500 });
        }
    },
    validate ({ params, error }) {
        try {
            const id = params.id;
            if (id === undefined || id === 'NaN' || id === '') {
              return false;
            } else {
              return true;
            }
        } catch (err) {
            return error({ statusCode: 500 });
        }
    },
    computed: {
        ...mapState(['profile'])
    }
}
</script>

<style lang="scss" scoped>

</style>
