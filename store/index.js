import { FETCH_PLAYER, FETCH_PROFILE, SET_PLAYER, SET_PROFILE, SET_FLAGS } from '@/assets/js/constants';

export const state = () => ({
    player: false,
    profile: false,
    error: false,
    loading: false
})

export const mutations = {
    [SET_FLAGS](state, payload) {
        state.error = payload.error;
        state.loading = payload.loading;
    },
    [SET_PLAYER](state, payload) {
        state.player = payload.player;
    },
    [SET_PROFILE](state, payload) {
        state.profile = payload.profile;
    }
}

export const actions = {
    async [FETCH_PLAYER]({ commit }, params) {
        try {
            const { data } = await this.$axios.get(`${process.env.dataAPI}${params.search}.json`);
            if(data.active === 'true') {
                commit(SET_PLAYER, { player: data });
                commit(SET_FLAGS, { error: false, loading: false });
            } else {
                commit(SET_FLAGS, { error: true, loading: false });
            }
        }
        catch (err) {
            commit(SET_FLAGS, { error: true, loading: false });
        }
    },
    async [FETCH_PROFILE]({ commit }, params) {
        try {
            
            const { data } = await this.$axios.get(`${process.env.profileAPI}${params.id}.json`);
            commit(SET_PROFILE, { profile: data });
        }
        catch (err) {
            return this.$nuxt.error({ statusCode: 404 });
        }
    }
}