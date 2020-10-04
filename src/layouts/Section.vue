<template>
  <div class="overflow-x-hidden" :id="id">
    <div
      :class="[
        separator ? 'border-gray-500 border-t' : '',
        'container-inner mx-auto text-xl pt-10 mb-24 relative'
      ]"
    >
      <h2 v-if="title" class="text-2xl font-bold mb-10 text-center">{{ title }}</h2>
      <div
        v-if="triangulePos == 'r'"
        class="absolute right-0 top-0 mt-10"
        style="transform: translate(100%) rotate(180deg)"
      >
        <svg width="170px" height="170px">
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

      <div
        v-else-if="triangulePos == 'l'"
        class="absolute left-0 top-0 mt-10"
        style="transform: translateX(-100%) scaleY(-1)"
      >
        <svg width="170px" height="170px">
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

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
    },
    triangulePos: {
      type: String,
      required: true
    },
    separator: {
      type: Boolean,
      required: true
    }
  }
});
</script>
