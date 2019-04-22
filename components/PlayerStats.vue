<template>
    <section class="stats">
        <h2 class="stats__title">Stats</h2>
        <ul class="stats__list">
            <li class="stats__item" v-if="stats.blocks">
                <p class="stats__label">Blocks:</p>
                <p class="stats__value">{{stats.blocks}}</p>
            </li>
            <li class="stats__item" v-if="stats.totalTackles">
                <p class="stats__label">Total Tackles:</p>
                <p class="stats__value">{{stats.totalTackles}}</p>
            </li>
            <li class="stats__item" v-if="stats.interceptions">
                <p class="stats__label">Interceptions:</p>
                <p class="stats__value">{{stats.interceptions}}</p>
            </li>
            <li class="stats__item" v-if="stats.tacklesWon">
                <p class="stats__label">Tackles Won:</p>
                <p class="stats__value">{{stats.tacklesWon}}</p>
            </li>
            <li class="stats__item" v-if="stats.yellowCards">
                <p class="stats__label">Yellow Cards:</p>
                <p class="stats__value">{{stats.yellowCards}}</p>
            </li>
            <li class="stats__item" v-if="stats.passingAccuracy">
                <p class="stats__label">Passing Accuracy:</p>
                <p class="stats__value">{{stats.passingAccuracy}}</p>
            </li>
            <li class="stats__item" v-if="stats.clearances">
                <p class="stats__label">Clearances:</p>
                <p class="stats__value">{{stats.clearances}}</p>
            </li>
            <li class="stats__item" v-if="stats.totalCrosses">
                <p class="stats__label">Total Crosses:</p>
                <p class="stats__value">{{stats.totalCrosses}}</p>
            </li>
            <li class="stats__item" v-if="stats.aerialDuelsWon">
                <p class="stats__label">Aerial Duels Won:</p>
                <p class="stats__value">{{stats.aerialDuelsWon}}</p>
            </li>
            <li class="stats__item" v-if="stats.minutesPlayed">
                <p class="stats__label">Minutes Played:</p>
                <p class="stats__value">{{stats.minutesPlayed}}</p>
            </li>
            <li class="stats__item" v-if="stats.minutesPerGoal">
                <p class="stats__label">Minutes Per Goal:</p>
                <p class="stats__value">{{stats.minutesPerGoal}}</p>
            </li>
            <li class="stats__item" v-if="stats.headedGoals">
                <p class="stats__label">Headed Goals:</p>
                <p class="stats__value">{{stats.headedGoals}}</p>
            </li>
            <li class="stats__item" v-if="stats.foulsConceded">
                <p class="stats__label">Fouls Conceded:</p>
                <p class="stats__value">{{stats.foulsConceded}}</p>
            </li>
            <li class="stats__item" v-if="stats.totalPasses">
                <p class="stats__label">Total Passes:</p>
                <p class="stats__value">{{stats.totalPasses}}</p>
            </li>
            <li class="stats__item" v-if="stats.totalShots">
                <p class="stats__label">Total Shots:</p>
                <p class="stats__value">{{stats.totalShots}}</p>
            </li>
            <li class="stats__item" v-if="stats.otherGoals">
                <p class="stats__label">Other Goals:</p>
                <p class="stats__value">{{stats.otherGoals}}</p>
            </li>
            <li class="stats__item" v-if="stats.duelsWon">
                <p class="stats__label">Duels Won:</p>
                <p class="stats__value">{{stats.duelsWon}}</p>
            </li>
            <li class="stats__item" v-if="stats.shotsOnTarget">
                <p class="stats__label">Shots On Target:</p>
                <p class="stats__value">{{stats.shotsOnTarget}}</p>
            </li>
            <li class="stats__item" v-if="stats.leftFootGoals">
                <p class="stats__label">Left Foot Goals:</p>
                <p class="stats__value">{{stats.leftFootGoals}}</p>
            </li>
            <li class="stats__item" v-if="stats.rightFootGoals">
                <p class="stats__label">Right Foot Goals:</p>
                <p class="stats__value">{{stats.rightFootGoals}}</p>
            </li>
            <li class="stats__item" v-if="stats.starts">
                <p class="stats__label">Starts:</p>
                <p class="stats__value">{{stats.starts}}</p>
            </li>
            <li class="stats__item" v-if="stats.goalsFromInsideBox">
                <p class="stats__label">Goals From Inside Box:</p>
                <p class="stats__value">{{stats.goalsFromInsideBox}}</p>
            </li>
            <li class="stats__item" v-if="stats.substitutionOff">
                <p class="stats__label">Substitution Off:</p>
                <p class="stats__value">{{stats.substitutionOff}}</p>
            </li>
            <li class="stats__item" v-if="stats.foulsWon">
                <p class="stats__label">Fouls Won:</p>
                <p class="stats__value">{{stats.foulsWon}}</p>
            </li>
            <li class="stats__item" v-if="stats.assists">
                <p class="stats__label">Assists:</p>
                <p class="stats__value">{{stats.assists}}</p>
            </li>
            <li class="stats__item" v-if="stats.gamesPlayed">
                <p class="stats__label">Games Played:</p>
                <p class="stats__value">{{stats.gamesPlayed}}</p>
            </li>
            <li class="stats__item" v-if="stats.substitutionOn">
                <p class="stats__label">Substitution On:</p>
                <p class="stats__value">{{stats.substitutionOn}}</p>
            </li>
            <li class="stats__item" v-if="stats.redCards">
                <p class="stats__label">Red Cards:</p>
                <p class="stats__value">{{stats.redCards}}</p>
            </li>
            <li class="stats__item" v-if="stats.goals">
                <p class="stats__label">Goals:</p>
                <p class="stats__value">{{stats.goals}}</p>
            </li>
            <li class="stats__item" v-if="stats.successfulCrosses">
                <p class="stats__label">Successful Crosses:</p>
                <p class="stats__value">{{stats.successfulCrosses}}</p>
            </li>
            <li class="stats__item" v-if="stats.goalsFromOutsideBox">
                <p class="stats__label">Goals From Outside Box:</p>
                <p class="stats__value">{{stats.goalsFromOutsideBox}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PlayerStats',
    props: {
        stats: Object
    }
}
</script>

<style lang="scss" scoped>
.stats {
    padding: 4rem;
    @include respond-to($tablet) {
        width: 50%;
    }
    &__title {
        padding: 2rem 0;
        color: lighten($gradientMain, 10%);
        text-align: center;
        letter-spacing: 0.05rem;
    }
    &__list {
        display: flex;
        flex-flow: column;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.6rem 0;
        border-bottom: .1rem dashed $containerTeam;
        &:last-of-type {
            border-bottom: 0;
        }
        p {
            display: inline-block;
        }
    }
    &__label {
        align-content: flex-start;
        margin-bottom: 0;
        color: lighten($gradientMain, 10%);
        font-size: 1.8rem;
        font-weight: bold;
    }
    &__value {
        align-content: flex-end;
        color: $mainText;
        font-size: 1.4rem;
    }
}
</style>