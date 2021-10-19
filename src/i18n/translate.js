import React from 'react'

const renderTerminos = (locale = 'es-ES') => {
  if (locale === 'es-ES') {
    return (
      <span>
        Ya leí y acepto los <a href="#">términos y condiciones</a> de Beews
      </span>
    )
  }

  return (
    <span>
      I have read and agree to the Beews <a href="#">terms and conditions.</a>
    </span>
  )
}

export const translate = {
  'es-ES': {
    index: {
      hero: {
        title: 'Más que un regalo, una forma de unir a las personas',
        subtitle: `Con Beews ahora podrás ver esa sonrisa que nace de tu sorpresa y
        disfrutarla en todo momento y en nuestro Marketplace encontraras
        los regalos hechos a la medida de tus sentimientos.`,
        cta: 'Viaja por nuestro mundo',
        title2: 'Uniendo historias alrededor del mundo',
        title3: 'Muchas historias que contar, muchas personas por conectar',
        cta3: 'Asi funciona Beews'
      },
      QueHacemos: {
        title: '¿Qué hacemos en Beews?',
        subtitle: 'Déscubrelo en estos 4 pasos',
        card1: {
          title: 'Planeamos',
          Paragraph: (
            <h4>
              <strong>
                Nos convertimos en tu contacto en Lima para preparar la
                sorpresa,
              </strong>{' '}
              somos cómplices para planificar la experiencia.
              <br />
              <br />
              Definimos juntos dónde, cómo y cuándo realizar la entrega.
            </h4>
          )
        },
        card2: {
          title: 'Entregamos',
          Paragraph: (
            <h4>
              <strong>
                Te presentamos a nuestros socios artistas que prepararán el
                regalo perfecto.
              </strong>
              <br />
              <br />
              Coordinamos el recojo del mismo para luego entregarlo.
            </h4>
          )
        },
        card3: {
          title: 'Conectamos',
          Paragraph: (
            <h4>
              <strong>
                Preparamos la conexión en línea contigo desde el lugar elegido,
              </strong>{' '}
              contamos con tu apoyo para dar el empujón final para que la
              sorpresa sea memorable e inolvidable.
            </h4>
          )
        },
        card4: {
          title: 'Grabamos',
          Paragraph: (
            <h4>
              <strong>Grabamos la sorpresa con 2 cámaras</strong> y luego
              editamos los mejores momentos en un video para que lo disfrutes
              cuando quieras, donde quieras. Siempre
            </h4>
          )
        }
      },
      Pricing: {
        title: 'Y cómo deseas sorprender este día?',
        subtitle: 'Hay un Beews esperando por ti',
        chooseBtn: 'Escoger'
      },
      Comunidad: {
        title: 'Sé parte de la comunidad Beews',
        subtitle: 'Instagram News'
      }
    },
    registro: {
      title: 'Regístrate',
      subtitle: 'Completa el siguiente formulario para registrarte',
      placeholder: {
        name: 'Nombre',
        lastName: 'Apellidos',
        email: 'Correo electrónico',
        phoneNumber: 'Celular',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña'
      },
      errors: {
        name: 'Ingrese un nombre válido',
        lastName: 'Ingrese un apellido válido',
        email: 'Ingrese un email válido',
        phoneNumber: 'Ingrese un celular',
        password: 'Ingrese una contraseña válida',
        confirmPassword: 'Las constraseñas deben coincidir'
      },
      terms: () => renderTerminos('es-ES'),
      newsletter: 'Acepto recibir información comercial de Beews',
      submitBtn: 'REGÍSTRATE',
      loginBtn: 'Ingresar'
    },
    quienesSomos: {
      hero: {
        title: 'El mundo en el que creemos',
        Paragraph: (
          <>
            <p>
              El mundo actual necesita alivio, necesita cuidado, necesita
              curarse.{' '}
              <strong>
                Para mejorarlo, creemos que debemos recuperar y promover la
                comunicación de las personas basada en las buenas intenciones,
                en la cooperación y la solidaridad.
              </strong>
            </p>
            <p>
              Los nuevos tiempos nos hacen transitar las actuales carreteras de
              la información, redes sociales, la web, y queremos hacerlo de
              manera diferente y motivar e integrar gente a este viaje.
            </p>
          </>
        )
      },
      cards: {
        Card1: (
          <p>
            Creemos en los mensajes positivos, creemos en integrar, en eliminar
            las distancias y barreras que nos separan, creemos en el amor y todo
            lo que trae consigo.{' '}
            <strong>Para nosotros cuando existe amor no hay distancias.</strong>
          </p>
        ),
        Card2: (
          <p>
            <strong>Queremos construir cadenas de valor</strong> que incluyan
            nuevos protagonistas talentosos, que reciban el justo precio a su
            trabajo y la real valoración del mismo.
          </p>
        ),
        Card3: (
          <p>
            Creemos en la tecnologia, la valoramos y disfrutamos, pero tambien
            en las personas y sus capacidades profesionales,{' '}
            <strong>
              creemos en el desarrollo que genere riqueza, trabajo y el
              progreso, para todos.
            </strong>
          </p>
        )
      },
      compromiso: {
        title: 'Nuestro compromiso',
        content: `"Nos comprometemos en ser un puente entre las personas que necesitan reencontrarse; 
        entre los que tiene algo bueno que ofrecer y los que necesitan algo bueno y no lo encuentran; 
        entre el talento humano y las personas que lo valoran"`
      }
    },
    comoFunciona: {
      hero: {
        title: 'Construyamos juntos el viaje a una linda sorpresa.',
        subtitle:
          'En 5 simples pasos te explicamos la forma de como puedes hacer tu pedido.',
        cta: '¡Es fácil y sencillo!'
      },
      productos: {
        content: `Escoge el paquete que desees y comencemos juntos esta 
        increible aventura.`
      },
      form: {
        title: '¿Tienes alguna duda?',
        placeholder: {
          name: 'Nombre',
          email: 'Email',
          textarea: '¿Como podemos ayudarte?'
        },
        submit: 'Enviar consulta'
      },
      publicidad: {
        title: 'No hay distancias, el amor nos une',
        subtitle: 'Historias inolvidables y reencuentros conmovedores',
        social: 'Visita nuestra canal de youtube'
      }
    },
    pedirBeews: {
      title: 'Ya estamos listos para el viaje',
      content: `Solo completa los últimos
      5 pasos y comienza la experiencia Beews.`,
      cta: 'Comenzar viaje'
    },
    checkout: {
      plan: {
        title: 'Escoge tu plan Beews',
        btn: 'Siguiente'
      },
      form: {
        title1: 'Llena el formulario',
        title2: 'LLena la ficha de destino',
        subtitle1: 'Primero llena tus datos personales',
        subtitle2:
          'Ahora llena los datos de la persona a la que le llegará tu Beews',
        personalForm: {
          name: 'Nombres',
          lastname: 'Apellidos',
          email: 'Correo electrónico',
          phone: 'Celular',
          country: 'País',
          city: 'Ciudad',
          submit: 'Siguiente'
        },
        destinationForm: {
          name: 'Nombres',
          lastname: 'Apellidos',
          label: '¿Donde se realizará la entrega?',
          country: 'País',
          city: 'Ciudad',
          district: 'Distrito',
          address: 'Dirección',
          reference: 'Referencia',
          link: '¿Cuál es el vínculo que tienes con el destinatario?',
          date: 'Fecha sugerida para la entrega',
          time: 'Hora sugerida para la entrega',
          submit: 'Registrar formulario'
        }
      },
      gift: {
        title: 'Añade un regalo a tu viaje',
        subtitle: 'Escoge el detalle con el que quieres acompañar tu Beews',
        accordion1: {
          label: '¿No encuentras el regalo que buscas?',
          title: '¡No te preocupes!',
          content: `Nuestro asesor personalizado te ayudara a conseguir el producto que 
          complemente tu sorpresa.`
        },
        accordion2: {
          label: 'Sobre tu asesor personal',
          paragraph1: `Una vez contrates el servicio, te asignaremos un asesor para que te ayude a 
          planificar la sorpresa.`,
          paragraph2: `En el caso que no hayas encontrado el regalo ideal, puedes coordinar con él la 
          compra de otro proveedor (*) o si gustas puedes enviar a nuestra dirección el regalo desde donde estes.`,
          paragraph3: `*Se generará una factura complementaria por el valor del producto a adquitir que puede ser 
          cancelado em nuestra página de pagos`
        },
        submit: 'Siguiente'
      },
      giftItem: {
        quantity: 'Cantidad',
        deliveryTime:
          'Tiempo de entrega: una semana, una vez confirmado el pedido.',
        submit: 'Añadir a carrito de compras',
        detail: 'Ver detalles de producto',
        share: 'Compartir'
      },
      pay: {
        title: 'Finalizar compra',
        payWith: 'Paga con',
        submit: 'Finalizar compra'
      },
      despego: {
        title: '¡Tu Beews está en camino!',
        subtitle: '¡Ya estamos conectados!',
        content: 'Conversa con tu asesor Beews a traves de este link',
        button: 'Conversa por aquí'
      }
    },
    footer: {
      terms: 'Términos y condiciones',
      derechos: 'Todos los derechos reservados',
      privacidad: 'Aviso de privacidad',
      cookies: 'Politica de Cookies',
      faq: 'FAQ´S',
      redes: 'Siguenos en nuestras redes',
      newsletter: 'Suscribete a nuestro newsletter',
      email: 'Escribe tu email',
      suscribete: 'Suscribete'
    },
    login: {
      title: 'Inicio de sesión',
      subtitle: 'Completa el siguiente formulario para ingresar',
      email: 'Email',
      password: 'Contraseña',
      submit: 'Inicio de sesión',
      registro: 'Registro en Beews'
    },
    navbar: {
      aboutUs: 'Quiénes somos',
      howWorks: 'Como funciona',
      fair: 'Nuestra feria',
      auth: 'Regístrate o Inicia Sesión',
      order: 'Pide un Beews'
    },
    parents: [
      'Padre',
      'Madre',
      'Hermano/na',
      'Abuelo/la',
      'Hijo/a',
      'Nieto/a',
      'Esposo/a',
      'Amigo/a',
      'Primo/a',
      'Tio/a',
      'Suegro/a',
      'Yerno',
      'Nuera',
      'Sobrino'
    ]
  },
  'en-US': {
    index: {
      hero: {
        title: 'More than a gift, a way of bringing people closer',
        subtitle: `With Beews now you can see that smile that comes 
        from your surprise and enjoy it at all times, and in our 
        Marketplace you will find gifts tailored to your feelings.`,
        cta: 'Travel our world',
        title2: 'Linking stories from around the world',
        title3: 'Many stories to tell. Many people to connect.',
        cta3: 'This is how Beews works'
      },
      QueHacemos: {
        title: '¿What do we do at Beews?',
        subtitle: 'Find out in these 4 steps',
        card1: {
          title: 'We plan',
          Paragraph: (
            <h4>
              <strong>
                We become your contact in Lima to prepare the surprise,
              </strong>{' '}
              we are your partners in planning the experience.
              <br />
              <br />
              We define together where, how and when to deliver.
            </h4>
          )
        },
        card2: {
          title: 'We deliver',
          Paragraph: (
            <h4>
              <strong>
                We will introduce you to our artist partners who will prepare
                the perfect gift.
              </strong>
              <br />
              <br />
              We coordinate the pick up and delivery of the gift.
            </h4>
          )
        },
        card3: {
          title: 'We connect',
          Paragraph: (
            <h4>
              <strong>
                We prepare the online connection with you from the chosen
                location,
              </strong>{' '}
              we count on your support to give the final push to make the
              surprise memorable and unforgettable.
            </h4>
          )
        },
        card4: {
          title: 'We tape & edit',
          Paragraph: (
            <h4>
              <strong>We recorded the surprise with 2 cameras</strong> and then
              we edit the best moments in a video so that you can enjoy it
              whenever you want, wherever you want. Always.
            </h4>
          )
        }
      },
      Pricing: {
        title: '¿And how do you want to surprise that day?',
        subtitle: 'A Beews is waiting for you',
        chooseBtn: 'Choose'
      },
      Comunidad: {
        title: 'Be part of the Beews community',
        subtitle: 'Instagram News'
      }
    },
    registro: {
      title: 'Register',
      subtitle: 'Complete these form to sign up',
      placeholder: {
        name: 'Name',
        email: 'Mail',
        password: 'Password',
        confirmPassword: 'Confirm Password'
      },
      errors: {
        name: 'Ingrese un nombre válido',
        lastName: 'Ingrese un apellido válido',
        email: 'Ingrese un email válido',
        phoneNumber: 'Ingrese un celular',
        password: 'Ingrese una contraseña válida',
        confirmPassword: 'Las constraseñas deben coincidir'
      },
      terms: () => renderTerminos('en-US'),
      newsletter: 'I agree to receive commercial information from Beews.',
      submitBtn: 'SIGN UP',
      loginBtn: 'Sign in for Beews'
    },
    quienesSomos: {
      hero: {
        title: 'The world in which we believe.',
        Paragraph: (
          <>
            <p>
              Today{"'"}s world needs relief, needs care, needs healing.{' '}
              <strong>
                To improve it, we believe that we must recover and promote the
                communication of people based on good intentions, cooperation
                and solidarity.
              </strong>
            </p>
            <p>
              The new times make us travel the current roads of information,
              social networks, the web, and we want to do it in a different way
              and motivate and integrate people in this journey.
            </p>
          </>
        )
      },
      cards: {
        Card1: (
          <p>
            We believe in positive messages, we believe in integrating, in
            eliminating the distances and barriers that separate us, we believe
            in love and all that it brings with it.{' '}
            <strong>For us, when there is love, there are no distances.</strong>
          </p>
        ),
        Card2: (
          <p>
            <strong> We want to build value chains</strong> that include new
            talented players, who receive a fair price for their work and its
            real value.
          </p>
        ),
        Card3: (
          <p>
            We believe in technology, we value and enjoy it, but also in people
            and their professional skills,{' '}
            <strong>
              we believe in development that generates wealth, work and progress
              for all.
            </strong>
          </p>
        )
      },
      compromiso: {
        title: 'Our commitment',
        content: `“We are committed to being a bridge between people who need to meet again, between those 
        who have something good to offer and those who need something good and cannot find it; between human 
        talent and the people who value it.”`
      }
    },
    comoFunciona: {
      hero: {
        title: "Let's build together the journey to a nice surprise.",
        subtitle:
          'In 5 simple steps we will explain how you can place your order.',
        cta: 'It is easy and simple!'
      },
      productos: {
        content: `Choose the option you want and let's start 
        this incredible adventure.`
      },
      form: {
        title: 'Any questions?',
        placeholder: {
          name: 'Name',
          email: 'Email',
          textarea: 'How can we help you?'
        },
        submit: 'Send request'
      },
      publicidad: {
        title: 'There are no distance, love unites us.',
        subtitle: 'Unforgettable stories, touching reunions',
        social: 'Visit our Youtube channel'
      }
    },
    pedirBeews: {
      title: 'We are now ready for the trip.',
      content: `Just complete the last 5 steps and start the Beews experience.
      Start travel.
      `,
      cta: 'Start travel'
    },
    checkout: {
      plan: {
        title: 'Select your Beews plan',
        btn: 'Next'
      },
      form: {
        title1: 'Fill the form',
        title2: 'Fill in the destination form',
        subtitle1: 'First fill in your personal data',
        subtitle2:
          'Now fill in the data of the person to whom your Beews will be sent.',
        personalForm: {
          name: 'Name',
          lastname: 'Surname',
          email: 'Mail',
          phone: 'Cel phone',
          country: 'Country',
          city: 'City',
          submit: 'Next'
        },
        destinationForm: {
          name: 'Name',
          lastname: 'Surname',
          label: 'Where will delivery take place?',
          country: 'Country',
          city: 'City',
          district: 'District',
          address: 'Address',
          reference: 'Reference',
          link: 'What is the link you have with the person you are addressing?',
          date: 'Suggested delivery date',
          time: 'Suggested delivery time',
          submit: 'Next'
        }
      },
      gift: {
        title: 'Add a gift to your trip',
        subtitle:
          'Choose the detail with which you want to accompany your Beews.',
        accordion1: {
          label: "Can't find the gift you are looking for?",
          title: "Don't worry!",
          content: `Our personal consultant will help you get the product that complements your 
          surprise.`
        },
        accordion2: {
          label: 'About our personal consultant',
          paragraph1:
            'Once you contract the service, we will assign you a consultant to help you plan the surprise.',
          paragraph2: `In case you have not found the ideal gift, you can coordinate with him the purchase through 
          another supplier (*), or, if you like you can send, to our local address, the gift from wherever you are.`,
          paragraph3: `(*)A complementary invoice will be generated for the value of the product to be purchased, 
          which can be paid in our payment page.`
        },
        submit: 'Next'
      },
      giftItem: {
        quantity: 'Quantity',
        deliveryTime: 'Delivery time: 1 week, once the purchase is confirmed.',
        submit: 'Add to shopping cart',
        detail: 'Ver detalles de producto',
        share: 'Compartir'
      },
      pay: {
        title: 'Finish purchase',
        payWith: 'Pay with',
        submit: 'Finish purchase'
      },
      despego: {
        title: 'Your Beews is on the way!',
        subtitle: 'We are already connected!',
        content: 'Talk to your Beews advisor through this Link.',
        button: 'Chat here.'
      }
    },
    footer: {
      terms: 'Terms and conditions',
      derechos: 'All rights reserved',
      privacidad: 'Notice of privacy',
      cookies: 'Cookies policy',
      faq: 'FAQ`S',
      redes: 'Follow us on our social networks',
      newsletter: 'Subscribe to our newsletter',
      email: 'Write your E-mail',
      suscribete: 'Subscribe'
    },
    login: {
      title: 'Login',
      subtitle: 'Complete these form to enter',
      email: 'Email',
      password: 'Password',
      submit: 'Login',
      registro: 'Sign up for Beews'
    },
    navbar: {
      aboutUs: 'About us',
      howWorks: 'How its works',
      fair: 'Our fair',
      auth: 'Register or login',
      order: 'Order a Beews'
    },
    parents: [
      'Father',
      'Mother',
      'Brother/sister',
      'Grandfather/mother',
      'Son/daugther',
      'Grandson/daugther',
      'Husband/wife',
      'Friend',
      'Cousin',
      'Uncle/aunt',
      'Father/mother-in-law',
      'Son-in-law',
      'Daugther-in-law',
      'Nephew/niece'
    ]
  }
}
