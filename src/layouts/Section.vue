<template>
  <div class="overflow-x-hidden" :id="id">
    <div
      class="container-inner mx-auto text-xl border-gray-500 border-t pt-10 mb-24 relative"
    >
      <h2 v-if="title" class="font-bold mb-6 text-center">{{ title }}</h2>
      <h3 class="mb-6" :class="title ? '' : 'font-bold'">{{ subtitle }}</h3>

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

<script>
export default {
  props: ['id', 'title', 'subtitle', 'triangulePos']
};
</script>
