<template>
  <div class="bg-background-tertiary border-background-tertiary rounded-lg">
    <ul class="projects-box overflow-y-auto">
      <li v-for="(project, index) in projects" :key="index">
      <div
        class="relative md:flex items-center my-6 mx-4 opacity-75 hover:opacity-100
        cursor-pointer"
      >
        <!-- IMAGE -->
          <div class="projects-img w-full md:w-2/5 h-full overflow-hidden">
            <g-image
              class="absolute w-full h-full object-contain object-left rounded-l-lg"
              :src="project.image"
              :alt="project.title"
            />
            <div class="absolute w-full h-full bg-green-600 opacity-25 rounded-lg"></div>
          </div>

          <!-- CONTENT -->
          <div
            class="absolute right-0 w-full md:w-3/5 h-full flex items-center bg-gray-100
            rounded-r-lg"
          >
            <svg
              class="hidden md:block absolute inset-y-0 h-full w-24 fill-gray-100
              text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="absolute p-3">
              <h2 class="font-bold colors text-gray-800">{{ project.title }}</h2>

              <div class="text-sm text-gray-600">
                <p class="mb-2">{{ project.description }}</p>
                <p class="mb-2" v-if="project.content">{{ project.content }}</p>

                <div class="text-sm">
                  <span>Repositorio:</span>
                  <ul>
                    <li v-for="(link, index) in project.links" :key="index">
                      <g-link :to="link" target="_blank"> ☁ {{ link }} </g-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import projects from '@/data/projects.json';

export default {
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.projects-box {
  height: 690px;
}

.projects-img {
  min-height: 15rem;
}
</style>
