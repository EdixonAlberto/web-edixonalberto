<template>
  <Layout>
    <div class="hero container-inner relative mx-auto pb-56 text-2xl sm:text-4xl font-bold">
      <div class="grid grid-cols-5 w-full text-left pt-16">
        <div class="col-span-3 leading-tight my-6">
          <p class="mb-5">Edixon Piña</p>
          <span class="block sm:mt-6">Ingeniero Electrónico en Computación</span>
        </div>

        <div class="col-span-2 sm:mt-0">
          <g-image class="mx-auto sm:mx-0" src="@/assets/svg/programmer.svg" alt="hero" width="350%" />
        </div>
      </div>

      <p class="text-color-secondary text-center leading-tight mt-10">
        Bienvenid@ a mi sitio web
      </p>

      <div class="arrow-icon">
        <font-awesome :icon="['fa', 'chevron-down']" size="lg" color="#2c7a7b" @click="goAbout" />
      </div>
    </div>

    <Section id="about" title="Sobre mí">
      <div class="flex flex-col sm:flex-row gap-10 items-start">
        <div class="m-auto text-center">
          <g-image class="flex-auto w-40 h-40 rounded-full mb-8 lg:mb-0" src="/images/avatar.png" alt="avatar" />
        </div>

        <div class="flex-1 text-lg">
          <p>
            Hola, mi nombre es Edixon Piña, soy
            <span class="font-bold text-color-secondary">
              ingeniero electrónico en computación
            </span>
            y actualmente me dedico a tiempo completo como desarrollador de software.
          </p>

          <p class="mt-4">
            Realizo proyectos y presto mis servicios de forma remota a empresas en todo el mundo, trabajando en el
            diseño, desarrollo y mantenimiento de software tanto en el
            <span class="font-bold text-color-secondary">frontend</span> como en el
            <span class="font-bold text-color-secondary">backend</span>.
          </p>

          <p class="mt-4">
            Soy una persona autodidacta, que se dedica constantemente aprender nuevas herramientas y tecnologías para
            optimizar su trabajo y crecer profesionalmente.
          </p>
          <p class="mt-4">He trabajado para las siguientes empresas:</p>
        </div>
      </div>

      <companies />
    </Section>

    <!-- TODO: SKILLS -->
    <!-- <Section
      id="skills"
      title="Habilidades"
      subtitle="En construcción..."
      triangulePos="r"
    >
    </Section> -->

    <Section id="projects" title="Proyectos" subtitle="Proyectos realizados">
      <projects />
    </Section>

    <contactme id="contactme" />
  </Layout>
</template>

<script lang="js">
import Section from '@/layouts/Section.vue';
import Projects from '@/components/Home/Projects.vue';
import Companies from '@/components/Home/Companies.vue';
import Contactme from '@/components/Home/Contactme.vue';

export default {
  components: {
    Section,
    Projects,
    Companies,
    Contactme
  },

  metaInfo: {
    title: 'edixonalberto.com'
  },

  methods: {
    goAbout() {
      scrollTo({
        top: document.getElementById('about').clientHeight,
        behavior: 'smooth'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .arrow-icon {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20%;
    text-align: center;

    animation: down 2.5s infinite ease-in-out;

    svg {
      cursor: pointer;
    }
  }
}

@keyframes down {
  0% {
    bottom: 20%;
  }
  50% {
    bottom: 18%;
  }
  100% {
    bottom: 20%;
  }
}
</style>
