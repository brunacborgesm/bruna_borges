import { Element } from "react-scroll";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Portfolio = () => {
  return (
    <Element id="portfolio" name="" className="px-20 element bg-bg-darkgreen flex flex-col h-screen justify-center items-center">

    <h2 className="text-title text-3xl text-bold ">Portifólio
    </h2>
    <div className="border-b-2 border-cl-green w-40 pt-2 mb-20"></div>
    <p className="pb-20">
        No momento estou selecionando os projetos que vão ser expostos nessa área.
    </p>

    <p className="pb-20">Caso tenha interesse pode acessar meu GitHub e dar uma olhada em meus repositórios.</p>

    <a className="bg-cl-green py-4 px-8 rounded-full flex items-center justify-center" href="https://github.com/brunacborgesm/" target="_blank">
        <GitHubIcon className="mr-2 text-cl-orange"/>
        GitHub</a>

  </Element>
  )
}
