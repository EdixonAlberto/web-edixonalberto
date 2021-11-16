<template>
  <div class="projects">
    <ul class="projects__container">
      <li v-for="(project, i) in projects" :key="i" class="projects__card">
        <div v-if="project.title">
          <div class="projects__banner" :style="{ backgroundImage: `url('${project.image}')` }"></div>

          <div class="projects__content">
            <h2 class="mb-2">{{ project.title }}</h2>
            <p class="mb-2">{{ project.description }}</p>

            <h3>Enlaces:</h3>

            <ul>
              <li v-for="(link, i) in project.links" :key="i">
                <g-link :to="link" target="_blank"> 🔗 {{ link }} </g-link>
              </li>
            </ul>

            <h3 class="mt-3">
              Estado:
              <div class="badge-state" :class="{ completed: project.completed }">
                <span class="text-white font-semibold" v-text="project.completed ? 'Completed' : 'In Progress'"></span>
              </div>
            </h3>
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
.projects {
  --height-card: 450px;
  width: 100%;
}

.projects .projects__container {
  width: 1200px;
  padding: 20px;
  margin-left: -100px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;

  justify-content: center;
  align-items: flex-start;

  @apply bg-background-tertiary;
  border: none;
  border-radius: 20px;
}

.projects__card {
  height: var(--height-card);
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @apply bg-background-primary;
  border-radius: 30px;

  transform: scale(0.95);
  transition: transform 0.35s ease-in-out;
}

.projects__card:hover {
  transform: scale(1);
}

.projects__banner {
  height: calc(var(--height-card) * 0.4);
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 30px 30px 0 0;
}

.projects__content {
  height: calc(var(--height-card) * 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}

.projects__content h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}

.projects__content p,
span {
  font-size: 18px;
}

.projects__content li {
  font-size: 16px;
}

.projects-img {
  min-height: 15rem;
}

.badge-state {
  width: max-content;
  height: auto;
  display: inline-flex;
  padding: 2px 12px;
  margin-left: 3px;

  border: none;
  border-radius: 20px;
}

.badge-state {
  background: #b72b74;
}

.badge-state.completed {
  background: #5aa70c;
}
</style>
