import { Element } from "react-scroll";

export const Contact = () => {
  return (
    <Element id="contact" name="" className="mx-10 element bg-bg-darkgreen h-screen flex flex-col justify-center items-center">

      <h2 className="text-title text-3xl text-bold -mt-16">Contatos</h2>

      <div className='flex flex-col space-y-9'>
        <a className="text-title flex flex-col justify-center items-center" href='https://www.linkedin.com/in/brunacborgesm/' target='_blank'>
          <img src='bruna_borges/linkedin.png' alt='linkedin icon' className='mt-16 mb-6 w-16 h-16'/>
          <p className='text-lg'>LinkedIn</p>
          <span className="text-xs">@brunacborgesm</span>
        </a>

        <a className="text-title flex flex-col justify-center items-center" href='https://github.com/brunacborgesm' target='_blank'>
          <img src='bruna_borges/github.png' alt='linkedin icon' className='w-16 h-16 mb-6'/>
          <p className='text-lg'>GitHub</p>
          <span className="text-xs">@brunacborgesm</span>
        </a>

        <a className="text-title flex flex-col justify-center items-center" href='mailto:brunaborgesdev@gmail.com' target='_blank'>
          <img src='bruna_borges/gmail.png' alt='linkedin icon' className='w-16 h-16 mb-6'/>
          <p className='text-lg'>E-mail</p>
          <span className="text-sm">brunaborgesdev@gmail.com</span>
        </a>
      </div>


    </Element>
  )
}
