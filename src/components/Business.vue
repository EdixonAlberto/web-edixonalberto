<template>
  <div class="">
    <ul class="text-center  mx-auto text-lg sm:text-xl">
      <li v-for="(busines, index) in business" :key="index" class="inline">
        <a
          class="opacity-75 hover:opacity-100 m-4"
          :href="busines.page"
          target="_blank"
          :alt="busines.name"
          :title="busines.name"
        >
          <g-image class="w-32 inline" :src="loadImagePath(busines.logo)" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import business from '@/data/business.json';
import loadImagePath from '@/services/loadImagePath';

export default {
  data() {
    return {
      business,
      loadImagePath
    };
  }
};
</script>

<style scoped>
img {
  filter: grayscale(100%) brightness(300%) contrast(14%);
}

img:hover {
  filter: grayscale(0);
}
</style>
