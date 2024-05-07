import { Element } from "react-scroll";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Portfolio = () => {
  return (
    <Element id="portfolio" name="" className="px-20 element bg-bg-darkgreen flex flex-col h-screen justify-center items-center">

    <h2 className="text-4xl font-title text-bold ">Portifólio
    </h2>
    <div className="border-b-2 border-cl-green w-40 pt-2 mb-20"></div>
    <p className="pb-14 text-lg">
        No momento estou selecionando os projetos que vão ser expostos nessa área.
    </p>

    <p className="pb-14 text-lg">Caso tenha interesse, logo abaixo, pode ser acessado o meu GitHub. Fique a vontade para dar uma olhada em meus repositórios.</p>

    <a className="bg-cl-green py-4 px-8 rounded-full flex items-center justify-center font-title font-bold" href="https://github.com/brunacborgesm/" target="_blank">
        <GitHubIcon className="mr-2 text-cl-orange"/>
        GitHub</a>

  </Element>
  )
}
