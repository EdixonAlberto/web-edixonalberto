<template>
  <div class="overflow-x-hidden -mb-16" id="contact">
    <svg viewBox="0 0 1695 57" class="fill-background-tertiary">
      <path
        d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"
      ></path>
    </svg>

    <div class="contact bg-background-tertiary pt-10">
      <div class="mx-auto text-xl container-inner relative">
        <h2 class="font-bold mb-6 text-center">Contactame</h2>
        <h3 class="mb-6">
          Para comunicarte conmigo, escribeme un correo electrónico, responderé lo antes
          posible.
        </h3>
        <div
          class="absolute right-0 top-0 mt-10"
          style="transform: translate(100%) rotate(180deg)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="text-lg sm:text-lg mb-16">
          <form class="mb-12" @submit.prevent="submit">
            <div class="flex flex-wrap mb-6 -mx-4">
              <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                <label class="block mb-2 text-copy-primary" for="name">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingrese su nombre"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                  required
                />
              </div>

              <div class="w-full px-4 md:w-1/2">
                <label class="block text-copy-primary mb-2" for="email"
                  >Dirección de Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                  required
                />
              </div>
            </div>

            <div class="w-full mb-8">
              <label class="block text-copy-primary mb-2" for="message">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="5"
                name="message"
                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                placeholder="Ingrese su mensaje aquí."
                required
              ></textarea>
            </div>

            <div class="flex justify-end w-full">
              <input
                type="submit"
                value="Enviar"
                class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3 mb-8"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    personalEmail
  }
}
</static-query>

<script>
import axios from 'axios';
import Section from '@/layouts/Section';

export default {
  components: {
    Section
  },

  methods: {
    submit(e) {
      const form = e.target;
      const [name, email, message] = form.elements;

      // TODO: filter and clean data

      // Preparing mail
      const mail = {
        from: email.value,
        to: this.$static.metadata.personalEmail,
        subject: `${name.value} | from edixonalberto.com`,
        message: message.value
      };

      this.sendMail(mail);

      // TODO: adding security and validations
      // for (var input of inputs) {
      //   console.log(input);
      //   if (input.value === '') {
      //     fieldsFull = false;
      //     break;
      //   }
      // }
    },

    async sendMail(mail) {
      const url = process.env.GRIDSOME_API_URL;

      try {
        const { data } = await axios.post(`${url}/api/send_email`, mail, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log(data); // TODO: add notification later
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>
