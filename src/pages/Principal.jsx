import Header from '../components/Header'
import React from 'react'
import harvey from '/Harvey Specter.jpg'
import mike from '/Mike Ross.jpg'
import rachel from '/Rachel Zane.jpg'
import donna from '/Donna Paulsen.jpg'
import louis from '/Louis Litt.jpg'
import jessica from '/Jessica Pearson.jpg'
import Fundo from '../assets/Imgfundo.jpg'
import Barra from '../components/Barra'

export default function Principal() {
  return (
    <section className='flex flex-col items-center justify-center mx-56 px-56 text-justify bg-gray-100 font-thin '>
        <Barra/>
        <Header/>
        <img className='w-auto opacity-90' src={Fundo} alt="" />
        <div className='flex flex-col items-center justify-center my-5'>
            <h2 className='font-medium text-3xl my-5 text-red-700'>Sinopse</h2>
            <p>
                "Suits" é uma série de televisão     americana criada por Aaron Korsh. A série estreou originalmente em 2011 no canal USA Network e ficou disponível para transmissão na Netflix em vários países.

                A trama de "Suits" gira em torno de um brilhante estudante de direito, Mike Ross (interpretado por Patrick J. Adams), que, apesar de não ter frequentado a faculdade de direito, impressiona o renomado advogado Harvey Specter (interpretado por Gabriel Macht) durante uma entrevista de emprego. Harvey contrata Mike como seu novo associado, mesmo sabendo que ele não possui diploma de direito, e os dois formam uma dupla dinâmica enquanto lidam com casos jurídicos complexos.

                A série se passa em um escritório de advocacia de alto nível em Nova York e aborda não apenas os casos legais, mas também os relacionamentos pessoais e profissionais dos personagens principais. Ao longo das temporadas, os espectadores testemunham o crescimento e desenvolvimento dos personagens, bem como a dinâmica entre eles.

                Além de Patrick J. Adams e Gabriel Macht, o elenco principal inclui Meghan Markle (antes de se tornar duquesa de Sussex), Sarah Rafferty, Rick Hoffman e Gina Torres.

                "Suits" recebeu críticas positivas por seu roteiro inteligente, performances sólidas e química entre os personagens principais. A série teve nove temporadas ao todo, encerrando sua corrida em setembro de 2019. Ao longo de sua execução, "Suits" conquistou uma base de fãs leais e se tornou uma das séries de TV mais populares da USA Network e da Netflix.
            </p>
        </div>

        <div>
        <h2 className='font-medium text-3xl my-5 text-red-700'>Informações da série</h2>
        </div>
        <div className='my-5 justify-center items-center'>
            
            <p className='mb-3'>Temporada 1: 12 episódios</p>
            <p className='mb-3'>Temporada 2: 16 episódios</p>
            <p className='mb-3'>Temporada 3: 16 episódios</p>
            <p className='mb-3'>Temporada 4: 16 episódios</p>
            <p className='mb-3'>Temporada 5: 16 episódios</p>
            <p className='mb-3'>Temporada 6: 16 episódios</p>
            <p className='mb-3'>Temporada 7: 16 episódios</p>
            <p className='mb-3'>Temporada 8: 16 episódios</p>
            <p className='mb-3'>Temporada 9: 10 episódios</p>        
            
        </div>

        <div>
            <h2 className='font-medium text-3xl my-5 text-red-700'>Personagens</h2>
        </div>

        <div className='flex my-12'>
            
            <div className=''>
                <h3 className='font-semibold text-red-700'>Harvey Specter</h3>
                <img className='h-80 w-60 mb-3 mt-2' src={harvey} alt="" />
                <p className='w-60 '>Harvey é um advogado brilhante e carismático que trabalha no escritório de advocacia Pearson Hardman (mais tarde Pearson Specter e Pearson Specter Litt). Ele é conhecido por sua confiança, astúcia e habilidade de ganhar casos difíceis.</p>
            </div>
            <div className='mx-8'>
                <h3 className='font-semibold text-red-700'>Mike Ross</h3>
                <img className='h-80 w-64 mb-3 mt-2' src={mike} alt="" />
                <p className='w-64'>Mike é um jovem inteligente com uma memória fotográfica que começa a trabalhar como associado na empresa de Harvey, embora não tenha frequentado a faculdade de direito nem tenha diploma. Ele possui um passado turbulento e esconde seu segredo de seus colegas de trabalho.</p>
            </div>
            <div className=''>
                <h3 className='font-semibold text-red-700'>Rachel Zane</h3>
                <img className='h-80 w-72 mb-3 mt-2' src={rachel} alt="" />
                <p className='w-72'>Rachel é inicialmente apresentada como uma paralegal na empresa Pearson Hardman (mais tarde Pearson Specter e Pearson Specter Litt), onde trabalha enquanto frequenta a faculdade de direito à noite. Ela é inteligente, ambiciosa e determinada a se tornar uma advogada. Rachel é conhecida por sua ética de trabalho impecável e sua habilidade de lidar com situações difíceis.
                </p>
            </div>
        </div>
        <div className='flex my-12'>
            <div  className=''>
                    <h3 className='font-semibold text-red-700'>Donna Paulsen</h3>
                    <img className='h-80 w-64 mb-3 mt-2' src={donna} alt="" />
                    <p className='w-64'>Donna é a assistente executiva de Harvey e é conhecida por sua inteligência, perspicácia e habilidades excepcionais de resolução de problemas. Ela desempenha um papel crucial no sucesso da empresa e é uma figura confiável para muitos dos personagens.</p>
                </div>
                <div  className='mx-8'>
                    <h3 className='font-semibold text-red-700'>Louis Litt</h3>
                    <img className='h-80 w-64 mb-3 mt-2' src={louis} alt="" />
                    <p className='w-64'>Louis é um dos principais sócios da empresa e inicialmente é um rival de Harvey. Ele é extremamente competitivo e muitas vezes luta para se destacar. Apesar de suas peculiaridades e excentricidades, ele é um advogado talentoso.</p>
                </div>
                <div >
                    <h3 className='font-semibold text-red-700'>Jessica Pearson</h3>
                    <img className='h-80 w-64 mb-3 mt-2' src={jessica} alt="" />
                    <p className='w-64'>Jessica é a sócia fundadora do escritório de advocacia Pearson Hardman e uma figura de autoridade respeitada na comunidade jurídica. Ela é inteligente, poderosa e determinada a manter a reputação e o sucesso da empresa.</p>
                </div>
        </div>

        <a className='text-blue-500 mt-12 mb-24' href="https://www.netflix.com/br/title/70195800">Assista a série</a>
        
    </section>
  )
}
