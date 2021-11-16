<template>
  <div class="overflow-x-hidden" :id="id">
    <div class="border-gray-500 border-t container-inner mx-auto text-xl sm:pt-10 mb-24 relative">
      <h2 v-if="title" class="text-2xl font-bold mb-10 text-center">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Section',

  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
});
</script>
