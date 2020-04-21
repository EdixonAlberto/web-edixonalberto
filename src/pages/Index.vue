<template>
  <Layout>
    <!-- HERO -->
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-4 sm:pt-32 sm:pb-48"
    >
      <div
        class="text-2xl sm:text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left mr-3"
      >
        <div class="leading-tight">
          <span class="block">Software Developer</span>
          <span class="block mt-2">Ingeniero Electrónico en Computación</span>
        </div>

        <div class="text-green-700 leading-tight mt-6">
          <span>Bienvenid@ a mi sitio web</span>
        </div>
      </div>

      <div class="mt-2 sm:mt-0">
        <g-image
          class="mx-auto sm:mx-0"
          src="@/assets/svg/programmer.svg"
          alt="hero"
          width="350%"
        />
      </div>
    </div>

    <!-- PROJECTS -->
    <Section
      id="projects"
      title="Proyectos"
      subtitle="Proyectos realizados"
      triangulePos="r"
    >
      <projects />
    </Section>

    <!-- ABOUT -->
    <Section id="about" title="Sobre mí" triangulePos="l">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <g-image
            src="https://s.gravatar.com/avatar/9d9876b16f45d91d1cb192bf3a035548?s=400"
            alt="avatar"
            class="w-32 h-32 rounded-full mb-8 lg:mb-0"
          />
        </div>
        <div class="flex-1 text-lg text-base ml-6">
          <p>
            Mi nombre es
            <span class="">Edixon Alberto Piña Hernandez</span>, soy
            <span class="text-green-600">ingeniero electrónico en computación</span> y
            actualmente me dedico a tiempo completo como desarrollador de software.
          </p>

          <p class="mt-4">
            Realizo proyectos y presto mis servicios de forma remota a empresas en todo el
            mundo, trabajando en el diseño, desarrollo y mantenimiento de software tanto
            en el <span class="text-green-600">frontend</span> como en el
            <span class="text-green-600">backend</span>.
          </p>

          <p class="mt-4">
            Soy una persona autodidacta, que se dedica constantemente aprender nuevas
            herramientas y tecnologías para optimizar su trabajo y crecer
            profesionalmente.
          </p>
        </div>
      </div>
    </Section>

    <!-- TODO: SKILLS -->
    <Section
      id="skills"
      title="Habilidades"
      subtitle="En construcción..."
      triangulePos="r"
    >
    </Section>
    <!--
    <ProjectCard /> -->

    <!-- BUSINESS -->
    <Section subtitle="He trabajado para" triangulePos="l">
      <business />
    </Section>

    <!-- CONTACT -->
    <contact />
  </Layout>
</template>

<script>
import Section from '@/layouts/Section';
import Projects from '@/components/Projects';
import Business from '@/components/Business';
import Contact from '@/components/Contact';

export default {
  components: {
    Section,
    Projects,
    Business,
    Contact
  },
  metaInfo: {
    title: 'edixonalberto.com'
  }
};
</script>
