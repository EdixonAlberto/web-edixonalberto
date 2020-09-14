<template>
  <div class="social-container">
    <div class="grid grid-cols-5">
      <div class="icon" v-for="(social, i) of socialNetworks" :key="i">
        <a
          class="text-white hover:text-gray-400"
          target="_blank"
          :href="social.name === 'Email' ? `mailto:${social.link}` : social.link"
          :title="`${social.name} | ${social.username}`"
        >
          <font-awesome :icon="[social.name === 'Email' ? 'far' : 'fab', social.icon]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import socialNetworks from '@/data/socialNetworks.json';

export default {
  data() {
    return {
      socialNetworks
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors';

.social-container {
  margin-top: 35px;
}

.icon {
  text-align: left;

  & > a {
    margin-top: 20px;
    padding: 9px 10px;
    vertical-align: middle;
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
