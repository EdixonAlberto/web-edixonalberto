<template>
  <Layout>
    <!-- HERO -->
    <div
      class="hero container-inner mx-auto justify-between text-2xl sm:text-4xl font-bold
      py-4 sm:pt-24 sm:pb-48"
    >
      <div class="grid grid-cols-5 w-full text-left">
        <div class="col-span-3 leading-tight my-6">
          <span class="block">Soy Edixon Piña</span>
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

      <div class="text-color-secondary text-center leading-tight mt-6">
        <span>Bienvenid@ a mi sitio web</span>
      </div>
    </div>

    <!-- ABOUT -->
    <Section id="about" title="Sobre mí" triangulePos="l" :separator="true">
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
            Mi nombre es Edixon Alberto Piña Hernandez, soy
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

      <!-- COMPANIES -->
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

    <!-- PROJECTS -->
    <Section
      id="projects"
      title="Proyectos"
      subtitle="Proyectos realizados"
      triangulePos="r"
      :separator="true"
    >
      <projects />
    </Section>

    <!-- CONTACT -->
    <contact />
  </Layout>
</template>

<script>
import Section from '@/layouts/Section';
import Projects from '@/templates/Home/Projects';
import Companies from '@/templates/Home/Companies';
import Contact from '@/templates/Home/Contact';

export default {
  components: {
    Section,
    Projects,
    Companies,
    Contact
  },
  metaInfo: {
    title: 'edixonalberto.com'
  }
};
</script>
