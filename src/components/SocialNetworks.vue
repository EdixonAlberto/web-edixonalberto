<template>
  <div class="social-container">
    <div class="grid grid-cols-5">
      <div
        class="icon md:text-left text-center"
        v-for="(network, key, i) in networks"
        :key="i"
      >
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
  margin-top: 39px;
}

.icon {
  & > a {
    margin-top: 20px;
    padding: 9px 10px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 1px 1px 7px 1px $color-primary;
    transition: ease-in 0.2s all;

    & > svg {
      transition: ease-in 0.2s all;
      font-size: 20px;
      color: black;
    }

    &:hover {
      box-shadow: none;

      & > svg {
        font-size: 18px;
        line-height: 50px;
      }
    }
  }
}
</style>
