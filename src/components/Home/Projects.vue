<template>
  <div class="projects">
    <ul class="container">
      <li v-for="(project, i) in projects" :key="i" class="card">
        <div class="layer"></div>

        <div class="banner" :style="{ backgroundImage: `url('${project.image}')` }"></div>

        <div class="content">
          <h2>{{ project.title }}</h2>
          <p class="mb-2">{{ project.description }}</p>

          <h3>Enlaces:</h3>

          <ul>
            <li v-for="(link, i) in project.links" :key="i" class="mb-1">
              <g-link :to="link" target="_blank">🔗 {{ link }}</g-link>
            </li>
          </ul>

          <h3 class="mt-2">
            Estado:
            <div class="badge-state" :class="{ completed: project.completed }">
              <span class="text-white font-semibold" v-text="project.completed ? 'Completed' : 'In Progress'"></span>
            </div>
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import projects from '@/data/projects.json';

export default Vue.extend({
  name: 'Projects',

  data() {
    return {
      projects
    };
  }
});
</script>

<style lang="scss" scoped>
$height-card: 470px;

.projects {
  width: 100%;

  .container {
    width: 1200px;
    margin-left: -100px;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;

    justify-content: center;
    align-items: flex-start;

    @apply bg-background-tertiary;
    border: none;
    border-radius: 20px;

    .card {
      height: $height-card;
      width: 100%;
      position: relative;
      overflow: hidden;

      display: flex;
      flex-direction: column;

      @apply bg-background-primary;
      border-radius: 30px;

      transition: transform 0.35s ease-in-out;
      transform: scale(0.95);

      .layer {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        background: rgba($color: #000000, $alpha: 0.22);
        transition: background 0.35s ease-in-out;
      }

      .banner {
        height: calc(#{$height-card} * 0.4);
        width: 100%;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
      }

      .content {
        height: calc(#{$height-card} * 0.6);
        padding: 20px;
        position: relative;
        user-select: none;

        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          font-size: 24px;
          font-weight: 700;
        }

        p,
        li,
        span {
          font-size: 15px;
        }
      }

      &:hover {
        transform: scale(1);

        .layer {
          background: rgba($color: #000000, $alpha: 0);
        }
      }

      .badge-state {
        width: max-content;
        height: auto;
        display: inline-flex;
        padding: 2px 12px;
        margin-left: 3px;

        background: #b72b74;
        border: none;
        border-radius: 20px;

        &.completed {
          background: #5aa70c;
        }
      }
    }
  }

  /* RESPONSIVE */
  @media (max-width: 540px) {
    .container {
      width: 100%;
      margin: 0;
      padding: 10px 5px;

      grid-template-columns: 1fr;
      grid-template-rows: auto;

      .card {
        .layer {
          display: none;
        }

        .content {
          h2 {
            font-size: 20px;
          }

          p,
          li,
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
