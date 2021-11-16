<template>
  <div class="companies">
    <ul class="text-center mx-auto text-lg sm:text-xl">
      <li v-for="(company, index) in companies" :key="index" class="inline">
        <a
          class="opacity-75 hover:opacity-100 m-8"
          :href="company.page"
          target="_blank"
          :alt="company.name"
          :title="company.name"
        >
          <g-image class="w-32 inline" :src="company.logo" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import companies from '@/data/companies.json';

export default {
  data() {
    return {
      companies
    };
  }
};
</script>

<style scoped>
img {
  transition: filter 0.25s ease-in;
  filter: grayscale(100%) brightness(300%) contrast(14%);
}

img:hover {
  filter: grayscale(0);
}
</style>
