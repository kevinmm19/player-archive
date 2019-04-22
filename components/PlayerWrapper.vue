<template>
    <section class="player__wrapper">
        <PlayerProfile :name="player.id" :profile="player.profile"/>
        <PlayerStats :stats="player.stats" />
    </section>
</template>

<script>
import PlayerProfile from '@/components/PlayerProfile.vue';
import PlayerStats from '@/components/PlayerStats.vue';

export default {
    name: 'PlayerWrapper',
    props: {
        player: Object
    },
    components: {
        PlayerProfile,
        PlayerStats
    }
}
</script>

<style lang="scss" scoped>
.player__wrapper {
    @include respond-to($tablet) {
        display: flex;
    }
}
</style>
