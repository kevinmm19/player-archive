<template>
    <section class="container">
        <Header />
        <Hero />
        <section class="container--alt" v-if="loading">
            <Loading />
        </section>
        <PlayerFound v-else-if="!error && player" />
        <section class="container--alt" v-else-if="error">
            <Message :msg="'No player matches your search criteria.'" />
        </section>
        <Footer />
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import Message from '@/components/Message.vue';
import PlayerFound from '@/components/PlayerFound.vue';

export default {
    name: 'Index',
    components: {
        Header,
        Hero,
        Footer,
        Loading,
        Message,
        PlayerFound
    },
    computed: {
        ...mapState(['player','loading','error'])
    }
}
</script>
