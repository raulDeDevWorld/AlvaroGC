'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import List from '@/components/List'
import Card from '@/components/Card'
import CardH from '@/components/CardH'
import CardA from '@/components/CardA'





export default function Home() {

  const [whatsapp, setWhatsapp] = useState(false)
  const [msg, setMsg] = useState(false)


  const Lists = [
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    {
      image: 'image.svg',
      service: 'Elaboracion y trámite de escrituras públicas.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure eius debitis pariatur magni quas.',
      remote: false,
      cost: 50,
      time: '24 hrs'
    },
    // 'Guarda, apertura y publicación de testamentos cerrados.',
    // 'Reconocimiento de documentos privados.',
    // 'Autenticacion de copias o firmas.',
    // 'Expedición de copias de las escrituras públicas.',
    // 'Realización de notas de referencia.',
    // 'Corrección de errores de las escrituras públicas.',
    // 'Conservacion de archivos notariales.',
  ]

  const Cards = [
    {
      image: 'perfil1.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },
    {
      image: 'perfil2.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },
    {
      image: 'perfil3.png',
      name: 'Dayana Segales',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    }
  ]


  const ListsA = [
    {
      title: 'Articulo: Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso Nombre del atículo puede ser extenso Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso Nombre del atículo puede ser extenso Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },

    {
      title: 'Articulo: Nombre del atículo puede ser extenso',
      msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. “'
    },




  ]





  const whatsappHandler = () => {
    setWhatsapp(!whatsapp)
  }

  const onChangeWhatsapp = (e) => {
    setMsg(e.target.value)
  }


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-5 ">
      <section className='max-h-screen w-full pt-18 pb-0 flex flex-col justify-between items-center lg:flex-row justify-around items-center pt-[70px]'>
        <div className='w-screen h-[50vh] flex justify-center items-end lg:w-[50vw] lg:h-[100vh]' style={{ backgroundImage: `url("/perfil.png")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        </div>

        <div className='h-[50vh] flex flex-col justify-around lg:w-[50vw] lg:h-[100vh] lg:p-12 pt-[70px]'>
          <img src="./image.svg" className='hidden h-[40%] lg:block' alt="" />
          <div>
            <h1 className='w-full text-center text-[16px] lg:text-[22px]'><span className='text-[#00A582] font-bold'>ÁLVARO </span><span className='text-gray-950 font-bold	'>GARCÍA CESPEDES</span></h1>
            <h1 className='w-full text-center text-[16px] lg:text-[22px]'><span className='text-[#00A582] font-bold'>NOTARIO </span><span className='text-gray-950 font-bold	'>DE FE PÚBLICA N°16</span></h1>
          </div>
          <div className='w-full flex justify-around' >
            <div className='flex flex-col'><span className='text-[#00A582] text-center text-[25px] font-bold'>5K</span><span className='text-[#00A582]'>Experiencia</span></div>
            <div className='flex flex-col'><span className='text-[#00A582] text-center text-[25px] font-bold'>3K</span><span className='text-[#00A582]'>Servicios</span></div>
          </div>
          <div className='lg:flex '>
            <Button theme="Secondary">Servicios</Button>
            <Button theme="Primary">Contactar</Button>
          </div>
        </div>
      </section>

      <section className='w-full pt-[70px]' id="Servicios">
        <Subtitle>Servicios</Subtitle>
        <div className='min-h-screen w-full flex flex-col justify-between items-center lg:flex-row justify-around items-center '>
          <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {
              Lists.map((i, index) =>
                <div>
                  <CardH image={i.image} service={i.service} description={i.description} remote={i.remote} cost={i.cost} time={i.time} index={index}></CardH>
                  <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-[#00A582] border-0 dark:bg-gray-700" />
                    <span class="absolute px-3 font-medium text-[#00A582] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">•</span>
                  </div>
                </div>
              )
            }
          </ul>
        </div>
      </section>

      <section className='w-full pt-[70px]' id="Testimonios">
        <Subtitle>Testimonios</Subtitle>
        <div className='w-full flex flex-col md:flex-row justify-around'>
          {
            Cards.map((i, index) => <Card key={index} image={i.image} name={i.name} text={i.text} />
            )
          }
        </div>
      </section>
      <section className='w-full pt-[70px]' id="Articulos">
        <Subtitle>Artículos</Subtitle>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 py-5 mt-5'>
          <img src="./articulo.png" className='pt-5 pb-5' alt="" />
          <ul className='border-l-2 border-[#01C89E] pl-5 pt-5 pb-5 flex flex-col justify-between '>
            {
              ListsA.map((i, index) => <List key={index}>{i.title}</List>
              )
            }
          </ul>
        </div>
      </section>

      <img src="/whatsapp.svg" class="fixed h-[50px] w-[50px] bottom-[20px] right-[20px]" onClick={whatsappHandler} alt="" />

      <div className={`fixed bottom-[20px] right-[20px] pt-14 pb-9 px-2 flex flex-grow flex-col justify-end rounded-[10px] border-gray-200 shadow bg-[url('/background.jpeg')] ${whatsapp ? 'fixed' : 'hidden'}`} >
        <div className='absolute top-0 left-0  w-full h-[50px] bg-[#00826A] rounded-t-[10px]'>
          <img src="/perfil.jpg" className='absolute h-[35px] w-[35px] left-[5px] top-[7.5px]  rounded-[35px]' alt="" />
          <div className='absolute flex flex-col left-[50px] top-[12px] text-white text-[12px]'>
            <span className='block text-[10px] m-0'>AlvaroCG</span>
            <span className='text-[8px] m-0'>en linea</span>
          </div>
          <span className='absolute  right-[10px] top-[12px] px-[7.5px] py-[3px]  border-[1px] text-white text-[12px] rounded-[5px]' onClick={whatsappHandler} >X</span>
        </div>
        <div
          className="ml-auto rounded-lg rounded-tr-none m-1 p-2 text-[12px] bg-[#DEF5D4] flex flex-col relative speech-bubble-right">
          <p className="">Hola...?</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>
        <div className="mr-auto rounded-lg rounded-tl-none m-1 p-2 text-[12px] bg-white flex flex-col relative speech-bubble-left">
          <p>Hola q tal, dinos en q podemos <br /> ayudarte...</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>

        <div className='flex absolute w-full left-0 bottom-0'>
          <input type="text" className=' w-full text-[12px] rounded-[20px] outline-none px-[10px]' onChange={onChangeWhatsapp} />
          <span className='w-[24px] p-[3px] bg-[#00826A] rounded-[20px]'><img src="/send.svg" className='h-[18px]' alt="" /></span>
        </div>

      </div>
      <footer class="w-full bg-neutral-900 text-center text-white mt-[70px]">
        <div class="container px-6 pt-6 flex justify-center">
          <div class="mb-6 flex justify-center">
            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd" />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          class="p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright:
          <a class="text-whitehite" href="https://tailwind-elements.com/"
          >Swoou </a
          >
        </div>
      </footer>
    </main>
  )
}
