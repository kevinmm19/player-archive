<template>
    <section class="player" v-if="player">
        <div class="player__result">
            <h2 class="player__title">Player Found</h2>
            <NuxtLink :to="'/players/'+profileId" class="btn-link">
                {{ player.id }}
                <font-awesome-icon icon="arrow-right" />
            </NuxtLink>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PlayerFound',
    computed: {
        ...mapState(['player']),
        profileId() {
            if (this.player['profile-id'] !== undefined) {
                return this.player['profile-id'].replace('.json','');
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
.player {
    margin: 0 auto;
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    &__result {
        padding: 4rem 0;
    }
    &__title {
        padding: 0 0 4rem;
    }
}
.fa-arrow-right {
    position: absolute;
    right: 2rem;
    top: 2rem;
}
</style>
