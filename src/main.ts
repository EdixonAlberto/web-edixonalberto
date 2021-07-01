// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { VueConstructor } from 'vue';
import DefaultLayout from '@/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Vuelidate from 'vuelidate';

config.autoAddCss = false;
library.add(
  faEnvelope,
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
  faSpinner,
  faDiscord,
  faChevronDown
);

export default function(
  Vue: VueConstructor,
  { router, head, isClient }: { router: any[]; head: THead; isClient: boolean }
) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease'
  });

  Vue.use(Vuelidate);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
  });

  /* SEO */
  head.meta.push({
    name: 'description',
    content: 'Personal website and programming blog'
  });

  head.meta.push({
    name: 'author',
    content: 'Edixon Piña'
  });
}
