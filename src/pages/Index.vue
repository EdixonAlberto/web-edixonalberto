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
          src="../../static/programmer.svg"
          alt="hero"
          width="350%"
        />
      </div>
    </div>

    <!-- PROJECTS -->
    <Projects />

    <!-- ABOUT -->
    <div class="overflow-x-hidden">
      <div
        class="about mx-auto text-xl container-inner border-gray-500 border-t pt-10 mb-12 relative"
        id="about"
      >
        <h2 class="font-bold mb-6 text-center">Sobre mí</h2>

        <div
          class="absolute left-0"
          style="top: 10%; transform: translateX(-100%) scaleY(-1)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <g-image
              src="../../static/avatar.png"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg text-base ml-6">
            <p>
              Mi nombre es Edixon Alberto Piña Hernandez, soy ingeniero electrónico en
              computación y actualmente me dedico a tiempo completo como desarrollador de
              software.
            </p>

            <p class="mt-4">
              Realizo proyectos y presto mis servicios de forma remota a empresas en todo
              el mundo, trabajando en el diseño, desarrollo, creación y mantenimiento de
              software de alto nivel.
            </p>

            <p class="mt-4">
              Soy una persona autodidacta, que se dedica constantemente aprender nuevas
              herramientas y tecnologías para optimizar su trabajo y crecer como
              profesional.
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="container-inner mx-auto overflow-x-hidden">
        <g-image src="../../static/pointers.svg" alt="pointers" />
      </div> -->
    </div>

    <!-- TODO: SKILLS -->

    <!-- CONTACT-ME -->
    <Contact />
  </Layout>
</template>

<script>
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default {
  components: {
    Projects,
    Contact
  },
  metaInfo: {
    title: 'Inicio'
  }
};
</script>
