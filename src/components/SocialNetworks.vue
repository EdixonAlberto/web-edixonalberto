<template>
  <div class="social-container">
    <div class="grid grid-cols-5">
      <div class="icon md:text-left text-center" v-for="(network, key, i) in networks" :key="i">
        <a
          class="text-white hover:text-gray-400"
          target="_blank"
          :href="key === 'email' ? `mailto:${network.link}` : network.link"
          :title="`${key.toUpperCase()} | ${network.username}`"
        >
          <font-awesome :icon="[key === 'email' ? 'far' : 'fab', network.icon]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import networks from '@/data/networks.json';

export default Vue.extend({
  name: 'SocialNetworks',

  data() {
    return {
      networks
    };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors';

.social-container {
  margin-top: 25px;
}

.icon {
  & > a {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    box-shadow: 0px 0px 4px rgba($color: #000000, $alpha: 0.5);
    background-color: white;
    transition: all 0.1s ease-in-out;

    svg {
      font-size: 20px;
      color: black;
    }

    &:hover {
      box-shadow: none;
      transform: scale(0.9);
    }
  }
}
</style>
