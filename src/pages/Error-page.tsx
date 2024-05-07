import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Error = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className="m-10 text-center">
                <h1 className='font-bold text-7xl text-title text-cl-orange mb-8'>Error 404</h1>
                <h2 className=''>Página não encontrada!</h2>
                <p className=' mb-10'>Clique no botão abaixo para voltar para a página inicial</p>
                <a className="bg-cl-green py-4 px-6 rounded-full" href='/bruna_borges/'>
                    <ChevronLeftIcon className='text-cl-orange' />
                    Página Inicial
                </a>
            </div>
        </div>
    )
}