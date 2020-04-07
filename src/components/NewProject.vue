<template>
  <li class="checkmark mb-6">
    <div>Project One</div>
    <div class="text-lg text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo
      exercitationem a, eius non culpa itaque!
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>
