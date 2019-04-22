import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

library.add(faArrowLeft, faArrowRight, faSearch, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);