<template>
  <div class="overflow-x-hidden pb-16" id="projects">
    <div
      class="projects container-inner mx-auto text-xl border-gray-500 border-t pt-10 relative"
    >
      <h2 class="font-bold mb-6 text-center">Proyectos</h2>
      <h2 class="font-bold mb-6">
        Proyectos en los que he trabajado:
      </h2>

      <div
        class="absolute right-0"
        style="top: 20%; transform: translate(100%) rotate(180deg)"
      >
        <svg width="170px" height="170px">
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

      <ul class="text-lg sm:text-xl">
        <span class="text-justify">En construcción...</span>
        <!-- TODO: List projects -->
        <!-- <new-project
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :
          /> -->
      </ul>
    </div>
  </div>
</template>

<script>
import NewProject from './NewProject';
// import projects from '@/data/projects.json';

export default {
  components: {
    NewProject
  }
  // data() {
  //   return {
  //     projects
  //   };
  // }
};
</script>
