import { Element } from "react-scroll";
import gmailimg from "../assets/gmail.png"
import linkedinimg from "../assets/linkedin.png"
import gitimg from "../assets/github.png"

export const Contact = () => {
  return (
    <Element id="contact" name="" className="px-10 element bg-bg-darkgreen flex flex-col h-screen justify-center items-center">

      <h2 className="text-title text-3xl text-bold -mt-16">Contatos</h2>
      <div className="border-b-2 border-cl-green w-40 mt-2 mb-14"></div>
      <div className='flex flex-col space-y-9'>
        <a className="text-title flex flex-col justify-center items-center" href='https://www.linkedin.com/in/brunacborgesm/' target='_blank'>
          <img src={ linkedinimg } alt='linkedin icon' className='mt-16 mb-6 w-16 h-16'/>
          <p className='text-lg font-bold text-cl-orange'>LinkedIn</p>
          <span className="text-xs">@brunacborgesm</span>
        </a>

        <a className="text-title flex flex-col justify-center items-center" href='https://github.com/brunacborgesm' target='_blank'>
          <img src={ gitimg } alt='github icon' className='w-16 h-16 mb-6'/>
          <p className='text-lg font-bold text-cl-orange'>GitHub</p>
          <span className="text-xs">@brunacborgesm</span>
        </a>

        <a className="text-title flex flex-col justify-center items-center" href='mailto:brunaborgesdev@gmail.com' target='_blank'>
          <img src={ gmailimg } alt='gmail icon' className='w-16 h-16'/>
          <p className='text-lg font-bold text-cl-orange'>E-mail</p>
          <span className="text-sm">brunaborgesdev@gmail.com</span>
        </a>
      </div>


    </Element>
  )
}
