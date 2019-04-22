<template>
    <div class="profile__wrapper">
        <LinkGoHome :icon="'arrow-left'" />
        <section class="profile container padding">
            <div class="profile__img-container" v-if="profile.picture">
                <img class="profile__img" :src="profile.picture" :alt="name">
            </div>
            <h1 class="profile__name" v-if="name">{{name}}</h1>
            <p class="profile__age" v-if="profile.age">{{profile.age}} years old</p>
            <div class="profile__footer" v-if="profile.team && profile.role">
                <div class="profile__team-container">
                    <p class="profile__team-label">Team</p>
                    <p class="profile__team">{{profile.team}}</p>
                </div>
                <hr class="profile__separator">
                <div class="profile__role-container">
                    <p class="profile__role-label">Role</p>
                    <p class="profile__role">{{profile.role}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LinkGoHome from '@/components/LinkGoHome.vue';

export default {
    name: 'PlayerProfile',
    props: {
        name: String,
        profile: Object
    },
    components: {
        LinkGoHome
    }
}
</script>

<style lang="scss" scoped>
.profile {
    position: relative;
    padding: 4rem 2rem 0;
    color: $mainText;
    text-transform: capitalize;
    background-color: $gradientMain;
    background: linear-gradient(0deg, $gradientMain, $gradientAlt);
    background-repeat: no-repeat;
    background-attachment: fixed;
    @include respond-to($tablet) {
        position: fixed;
        width: 50%;
    }
    &__wrapper {
        position: relative;
        @include respond-to($tablet) {
            width: 50%;
        }
    }
    &__img {
        &-container {
            margin: 0 auto;
            width: 17rem;
            height: 17rem;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    &__name {
        padding: 1rem 0;
        letter-spacing: 0.05rem;
    }
    &__age {
        margin-bottom: 0;
        font-size: 1.8rem;
        text-transform: none;
    }
    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        top: 2rem;
        padding: 2rem;
        background-color: whitesmoke;
        color: $otherText;
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0 1rem 2rem -0.5rem lighten($gradientMain, 10%);
    }
    &__separator {
        width: .2rem;
        height: 5rem;
        background-color: $gradientMain;
        border: 0;
    }
    &__team,
    &__role {
        font-size: 1.5rem;
        &-label {
            font-size: 2rem;
            font-weight: bold;
        }
    }
}
</style>