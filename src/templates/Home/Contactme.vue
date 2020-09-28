<template>
  <div class="overflow-x-hidden mx-auto font-sans">
    <svg
      id="curve"
      class="md:block hidden fill-background-tertiary -mb-1"
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

    <div
      class="grid md:grid-rows-4 grid-rows-6 text-center bg-background-tertiary md:px-10 px-6 pb-10"
    >
      <div class="row-span-1 self-center">
        <h1 class="text-2xl font-bold text-tailwind">Contactame</h1>
      </div>

      <div class="md:row-span-3 row-span-5">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-16">
          <section class="form text-black m-0">
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
                v-model.trim="$v.name.$model"
              />
              <div v-if="$v.name.$error">
                <div class="input-error" v-if="!$v.name.required">
                  - Campo es requerido
                </div>
                <div class="input-error" v-if="!$v.name.minLength">
                  - El nombre debe tener al menos
                  {{ $v.name.$params.minLength.min }} letras.
                </div>
              </div>

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
                v-model.trim="$v.email.$model"
              />

              <div v-if="$v.email.$error">
                <div class="input-error" v-if="!$v.email.required">
                  - Campo es requerido
                </div>
                <div class="input-error" v-if="!$v.email.emailFormat">
                  - El correo no tiene un formato válido. Ejemplo: email@example.com
                </div>
              </div>

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
                v-model.trim="$v.message.$model"
              >
              </textarea>
              <div class="input-error" v-if="!$v.message.required && $v.message.$error">
                - Campo es requerido
              </div>

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

          <section class="info md:text-left text-center">
            <p class="text-lg text-tailwind">
              Si quieres llevar tus ideas al mundo digital, enviame tu propuesta.
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
                {{ myEmail }}
              </p>
              <p>
                <strong>Horario:</strong>
                De Lunes a Viernes, de 8:00 a 18:00
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
import axios from 'axios';
import { required, minLength } from 'vuelidate/lib/validators';
import SocialNetworks from '@/components/SocialNetworks';
import networks from '@/data/networks.json';

export default {
  name: 'Contactme',

  components: {
    SocialNetworks
  },

  data() {
    return {
      sendingEmail: false,
      myEmail: networks.email.link,
      name: '',
      email: '',
      message: ''
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(8)
    },
    email: {
      required,
      emailFormat: (email) => new RegExp(/^$|^[a-z0-9_.]+\@[a-z]+\.com$/).test(email)
    },
    message: {
      required
    }
  },

  methods: {
    async submit() {
      // block button
      this.sendingEmail = true;

      const verifed = await this.captchaVerify();

      if (verifed) {
        // Prepare data
        const mail = {
          from: this.email,
          to: this.myEmail,
          subject: `Nuevo correo de ${this.name} <${this.email}>`,
          message: this.message
        };

        // Send email
        const correct = await this.sendMail(mail);

        if (correct) {
          alert('¡Su correo ha sido enviado con exito!.\nMuchas gracias por su tiempo.');
          this.resetForm();
        }
      }

      this.sendingEmail = false;
    },

    async captchaVerify() {
      return new Promise((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(process.env.GRIDSOME_RECAPTCHA_API_KEY, {
              action: 'submit'
            })
            .then(async (token) => {
              const url = `${process.env.GRIDSOME_API_URL}/api/recaptcha_verify`;

              const body = { response: token };

              const { status, data } = await axios.post(url, body, {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  ak: process.env.GRIDSOME_SERVER_API_KEY
                }
              });

              if (status === 200 && data.type === 'Successful') resolve(true);
              else {
                console.warn('WARN-RECAPTCHA ->', data);
                alert('Error en la verificación de reCAPTCHA');
                resolve(false);
              }
            })
            .catch((error) => {
              console.error('ERROR-RECAPTCHA ->', error.message);

              alert(
                'No se puede conectar con reCAPTCHA. ' +
                  'Comprueba tu conexión e inténtalo de nuevo.'
              );
              resolve(false);
            });
        });
      });
    },

    async sendMail(mail) {
      const errorMessage =
        'Ha ocurrido un error y no se ha podido enviar su correo.\n' +
        'Por favor intentelo de nuevo.';
      const errorServer = 'No se puede establecer comunicación con el servidor';

      try {
        const url = `${process.env.GRIDSOME_API_URL}/api/send_email`;

        const { status, data } = await axios.post(url, mail, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ak: process.env.GRIDSOME_SERVER_API_KEY
          }
        });

        // TODO: reemplazar los "alert()" por tarjetas o animaciones.
        if (status === 200) return true;
        else {
          console.warn('WARN-SEND-MAIL ->', data);

          alert(errorMessage);
          return false;
        }
      } catch (error) {
        console.error('ERROR-SEND-MAIL ->', error.message);

        alert(errorServer);
        return false;
      }
    },

    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss" scoped>
section.form {
  input,
  textarea {
    margin-top: 6px;
  }

  input {
    margin-bottom: 26px;
  }

  textarea {
    margin-bottom: 20px;
  }

  button {
    margin-top: 10px;
  }

  .input-error {
    @apply text-red-700;
    text-align: left;
    margin-left: 10px;
    margin-top: -24px;
  }

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
