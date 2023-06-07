'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import List from '@/components/List'
import Card from '@/components/Card'




export default function Home() {

  const [whatsapp, setWhatsapp] = useState(false)
  const [msg, setMsg] = useState(false)


  const Lists = [
    'Elaboracion y trámite de escrituras públicas.',
    'Guarda, apertura y publicación de testamentos cerrados.',
    'Reconocimiento de documentos privados.',
    'Autenticacion de copias o firmas.',
    'Expedición de copias de las escrituras públicas.',
    'Realización de notas de referencia.',
    'Corrección de errores de las escrituras públicas.',
    'Conservacion de archivos notariales.',
  ]

  const Cards = [
    {
      image: 'perfil1.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    },
    {
      image: 'perfil2.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    },
    {
      image: 'perfil3.png',
      name: 'Dayana Segales',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    }
  ]


  const whatsappHandler = () => {
    setWhatsapp(!whatsapp)
  }

  const onChangeWhatsapp = (e) => {
    setMsg(e.target.value )
  }


  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between p-0 ">

      <section className='h-screen w-full pt-18 pb-0 flex flex-col justify-between items-center lg:flex-row justify-around items-center '>
        <div className='w-screen h-[50vh] flex justify-center items-end lg:w-[50vw] lg:h-[100vh]' >
          <img src="/perfil.jpg" className='w-[70vw] rounded-[30px] lg:w-[50vw] ' alt="" />
        </div>

        <div className='h-[50vh] flex flex-col justify-around lg:w-[50vw] lg:h-[100vh] lg:p-12'>
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


      <section>
        <Subtitle>Servicios</Subtitle>
        <div>
          <div className='h-screen w-full pt-18 pb-0 flex flex-col justify-between items-center lg:flex-row justify-around items-center '>
            <img src="./image.svg" alt="" />
            <ul className='border-l-2 border-[#01C89E] pl-5'>
              {
                Lists.map((i, index) => <List>{i}</List>
                )
              }
            </ul>
          </div>
        </div>
      </section>
      <section className='h-screen w-full bg-gray-00 flex flex-col justify-center items-center' id="Testimonios">
        <Subtitle>Testimonios</Subtitle>
        <div className='w-full flex flex-col lg:flex-row justify-around'>
          {
            Cards.map((i, index) => <Card image={i.image} name={i.name} text={i.text} />
            )
          }
        </div>
      </section>

      <img src="/whatsapp.svg" class="fixed h-[50px] w-[50px] bottom-[20px] right-[20px]" onClick={whatsappHandler} alt="" />

      <div className={`fixed bottom-[20px] right-[20px] pt-14 pb-9 px-2 flex flex-grow flex-col justify-end rounded-[10px] border-gray-200 shadow bg-[url('/background.jpeg')] ${whatsapp ? 'fixed': 'hidden'}`} >
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
          <input type="text" className=' w-full text-[12px] rounded-[20px] outline-none px-[10px]' onChange={onChangeWhatsapp}/>
          <span className='w-[24px] p-[3px] bg-[#00826A] rounded-[20px]'><img src="/send.svg" className='h-[18px]' alt="" /></span>
        </div>

      </div>

    </main>
  )
}
