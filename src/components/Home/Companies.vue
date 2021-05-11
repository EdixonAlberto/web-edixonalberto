<template>
  <div>
    <ul class="text-center mx-auto text-lg sm:text-xl sm:mt-0 mt-5">
      <li v-for="(company, index) in companies" :key="index" class="inline">
        <a
          class="opacity-75 hover:opacity-100 m-10"
          :href="company.page"
          target="_blank"
          :alt="company.name"
          :title="company.name"
        >
          <g-image class="w-32 inline sm:m-0 my-3" :src="company.logo" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import companies from '@/data/companies.json';

export default Vue.extend({
  name: 'Companies',

  data() {
    return {
      companies
    };
  }
});
</script>

<style scoped>
img {
  filter: grayscale(100%) brightness(300%) contrast(14%);
}

img:hover {
  filter: grayscale(0);
}
</style>
