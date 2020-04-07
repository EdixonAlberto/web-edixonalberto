// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease'
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
  });

  /* SEO */
  head.meta.push({
    name: 'description',
    content: 'Edixon Alberto | WebSite'
  });

  head.meta.push({
    name: 'author',
    content: 'Edixon Alberto'
  });
}
