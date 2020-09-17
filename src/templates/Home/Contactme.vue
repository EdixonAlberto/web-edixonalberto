<template>
  <div class="overflow-x-hidden mx-auto font-sans">
    <svg
      id="curve"
      class="fill-background-tertiary -mb-1"
      data-name="curve"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1695 57"
    >
      <path
        d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"
      >
        <title>curve</title>
      </path>
    </svg>

    <div class="grid grid-rows-4 text-center bg-background-tertiary px-10 pb-10">
      <div class="row-span-1 self-center">
        <h1 class="text-2xl font-bold text-tailwind">Contactame</h1>
      </div>

      <div class="row-span-3">
        <div class="grid col-gap-16 grid-cols-2 gap-4">
          <section class="form m-0">
            <form @submit.prevent="submit" autocomplete="off">
              <input
                :class="[
                  'bg-gray-100 outline-none appearance-none border border-green-700 rounded',
                  'w-full py-2 px-4 mb-2 leading-tight',
                  'focus:outline-none focus:bg-white'
                ]"
                type="text"
                name="name"
                placeholder="Nombre:"
                required
              />

              <input
                :class="[
                  'bg-gray-100 outline-none appearance-none border border-green-700 rounded',
                  'w-full py-2 px-4 mb-2 leading-tight',
                  'focus:outline-none focus:bg-white'
                ]"
                type="text"
                name="email"
                placeholder="Correo:"
                required
              />

              <textarea
                :class="[
                  'bg-gray-100 outline-none appearance-none border border-green-700 rounded',
                  'w-full py-2 px-4 mb-2 leading-tight',
                  'focus:bg-white resize-none'
                ]"
                name="message"
                placeholder="Mensaje:"
                cols="70"
                rows="10"
                required
              >
              </textarea>

              <!-- <vue-recaptcha
                class="mb-3 inline-flex"
                sitekey="6LeAjssZAAAAAI4PHblbJksqpmTKn6UCoGh26DEx"
                :loadRecaptchaScript="true"
              ></vue-recaptcha> -->

              <button
                type="submit"
                :class="[
                  'shadow',
                  sendingEmail ? 'bg-green-800 cursor-default' : 'bg-green-700',
                  'text-white font-bold',
                  'w-full py-2 px-4 rounded-full',
                  'hover:bg-green-800 focus:outline-none'
                ]"
                :disabled="sendingEmail"
              >
                <font-awesome
                  v-if="sendingEmail"
                  :icon="['fa', 'spinner']"
                  spin
                  size="lg"
                />
                <span v-else>Enviar</span>
              </button>
            </form>
          </section>

          <section class="info text-left">
            <p class="text-lg text-tailwind">
              Si quieres llevar tus ideas al mundo digital, escribeme.
            </p>
            <p class="text-4xl mt-4">Datos de contacto</p>

            <article class="data">
              <p>
                <strong>Dirección:</strong>
                Lara, Venezuela
              </p>
              <p>
                <strong>Número:</strong>
                +58 424 5309444
              </p>
              <p>
                <strong>Email:</strong>
                {{ email }}
              </p>
              <p>
                <strong>Horario:</strong>
                De Lunes a Viernes, de 8:00 a 17:00
              </p>
            </article>

            <social-networks />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks';
import VueRecaptcha from 'vue-recaptcha';
import networks from '@/data/networks.json';

export default {
  name: 'Contactme',

  components: {
    SocialNetworks,
    VueRecaptcha
  },

  data() {
    return {
      sendingEmail: false,
      email: networks.email.link
    };
  },

  methods: {
    async submit(e) {
      // block button
      this.sendingEmail = true;

      setTimeout(() => {
        this.sendingEmail = false;
      }, 3000);

      // get values
      // const form = e.target;
      // const [name, email, message] = form.elements;

      // TODO: filter and clean data

      // Prepare mail
      // const mail = {
      //   from: email.value,
      //   to: this.$static.metadata.personalEmail,
      //   subject: `${name.value} | from edixonalberto.com`,
      //   message: message.value
      // };

      // const correct = await this.sendMail(mail);
      // if (correct) form.reset();
      // this.sendingEmail = false;

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
      const errorMessage =
        'Ha ocurrido un error y no se ha podido enviar su correo.\n' +
        'Por favor pulse enviar de nuevo.';

      try {
        const { status, data } = await axios.post(
          `${process.env.GRIDSOME_API_URL}/api/send_email`,
          mail,
          {
            headers: {
              'Content-Type': 'application/json',
              ak: process.env.GRIDSOME_API_KEY
            }
          }
        );
        console.log(data);

        // TODO: add notification later
        if (status === 200) {
          alert('¡Su correo ha sido enviado con exito!.\nMuchas gracias por su tiempo.');
          return true;
        } else {
          alert(errorMessage);
          return false;
        }
      } catch (error) {
        console.error(error.message);
        alert(errorMessage);
        return false;
      }
      // TODO: reemplazar los "alert()" por tarjetas o animaciones.
    }
  }
};
</script>

<style lang="scss" scoped>
section.form {
  button {
    transition: all 0.5s ease;

    .loading {
      width: 100%;
    }
  }
}

section.info {
  article {
    &.data p {
      margin-bottom: 9px;
    }
  }
}
</style>
