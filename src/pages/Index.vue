<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex-row justify-between text-2xl sm:text-4xl font-bold h-screen pt-32"
    >
      <div class="grid grid-cols-5 w-full text-left">
        <div class="col-span-3 leading-tight my-6">
          <p class="mb-5">Edixon Piña</p>
          <span class="block sm:mt-6">Ingeniero Electrónico en Computación</span>
        </div>

        <div class="col-span-2 sm:mt-0">
          <g-image
            class="mx-auto sm:mx-0"
            src="@/assets/svg/programmer.svg"
            alt="hero"
            width="350%"
          />
        </div>
      </div>

      <p class="text-color-secondary text-center leading-tight mt-6">
        Bienvenid@ a mi sitio web
      </p>
    </div>

    <Section id="about" title="Sobre mí">
      <div class="flex flex-col sm:flex-row gap-10 items-start">
        <div class="m-auto text-center">
          <g-image
            class="flex-auto w-40 h-40 rounded-full mb-8 lg:mb-0"
            src="/images/avatar.png"
            alt="avatar"
          />
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
            Realizo proyectos y presto mis servicios de forma remota a empresas en todo el
            mundo, trabajando en el diseño, desarrollo y mantenimiento de software tanto
            en el <span class="font-bold text-color-secondary">frontend</span> como en el
            <span class="font-bold text-color-secondary">backend</span>.
          </p>

          <p class="mt-4">
            Soy una persona autodidacta, que se dedica constantemente aprender nuevas
            herramientas y tecnologías para optimizar su trabajo y crecer
            profesionalmente.
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

<script lang="ts">
import Vue from 'vue';
import Section from '@/layouts/Section.vue';
import Projects from '@/components/Home/Projects.vue';
import Companies from '@/components/Home/Companies.vue';
import Contactme from '@/components/Home/Contactme.vue';

export default Vue.extend({
  components: {
    Section,
    Projects,
    Companies,
    Contactme
  },

  metaInfo: {
    title: 'edixonalberto.com'
  }
});
</script>
