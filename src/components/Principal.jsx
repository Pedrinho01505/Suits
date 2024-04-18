import React from 'react'
import harvey from '/Harvey Specter.jpg'
import mike from '/Mike Ross.jpg'
import rachel from '/Rachel Zane.jpg'
import donna from '/Donna Paulsen.jpg'
import louis from '/Louis Litt.jpg'
import jessica from '/Jessica Pearson.jpg'

export default function Principal() {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div>
            <h2 className='font-bold text-3xl'>Sinopse</h2>
            <p>
                "Suits" é uma série de televisão americana criada por Aaron Korsh. A série estreou originalmente em 2011 no canal USA Network e ficou disponível para transmissão na Netflix em vários países.

                A trama de "Suits" gira em torno de um brilhante estudante de direito, Mike Ross (interpretado por Patrick J. Adams), que, apesar de não ter frequentado a faculdade de direito, impressiona o renomado advogado Harvey Specter (interpretado por Gabriel Macht) durante uma entrevista de emprego. Harvey contrata Mike como seu novo associado, mesmo sabendo que ele não possui diploma de direito, e os dois formam uma dupla dinâmica enquanto lidam com casos jurídicos complexos.

                A série se passa em um escritório de advocacia de alto nível em Nova York e aborda não apenas os casos legais, mas também os relacionamentos pessoais e profissionais dos personagens principais. Ao longo das temporadas, os espectadores testemunham o crescimento e desenvolvimento dos personagens, bem como a dinâmica entre eles.

                Além de Patrick J. Adams e Gabriel Macht, o elenco principal inclui Meghan Markle (antes de se tornar duquesa de Sussex), Sarah Rafferty, Rick Hoffman e Gina Torres.

                "Suits" recebeu críticas positivas por seu roteiro inteligente, performances sólidas e química entre os personagens principais. A série teve nove temporadas ao todo, encerrando sua corrida em setembro de 2019. Ao longo de sua execução, "Suits" conquistou uma base de fãs leais e se tornou uma das séries de TV mais populares da USA Network e da Netflix.
            </p>
        </div>

        <div>
            <h2 className='font-bold text-3xl'>Informações da série</h2>
            <p>
                Temporada 1: 12 episódios
                Temporada 2: 16 episódios
                Temporada 3: 16 episódios
                Temporada 4: 16 episódios
                Temporada 5: 16 episódios
                Temporada 6: 16 episódios
                Temporada 7: 16 episódios
                Temporada 8: 16 episódios
                Temporada 9: 10 episódios
            </p>
        </div>

        <div>
            <h2 className='font-bold text-3xl'>Personagens</h2>
        </div>

        <div className='flex'>
            
            <div>
                <h3 className='font-semibold'>Harvey Specter</h3>
                <img className='w-80 h-100' src={harvey} alt="" />
                <p>Harvey é um advogado brilhante e carismático que trabalha no escritório de advocacia Pearson Hardman (mais tarde Pearson Specter e Pearson Specter Litt). Ele é conhecido por sua confiança, astúcia e habilidade de ganhar casos difíceis.</p>
            </div>
            <div>
                <h3 className='font-semibold'>Mike Ross</h3>
                <img className='w-80 h-100' src={mike} alt="" />
                <p>Mike é um jovem inteligente com uma memória fotográfica que começa a trabalhar como associado na empresa de Harvey, embora não tenha frequentado a faculdade de direito nem tenha diploma. Ele possui um passado turbulento e esconde seu segredo de seus colegas de trabalho.</p>
            </div>
            <div>
                <h3 className='font-semibold'>Rachel Zane</h3>
                <img className='w-80 h-100' src={rachel} alt="" />
                <p>Rachel é inicialmente apresentada como uma paralegal na empresa Pearson Hardman (mais tarde Pearson Specter e Pearson Specter Litt), onde trabalha enquanto frequenta a faculdade de direito à noite. Ela é inteligente, ambiciosa e determinada a se tornar uma advogada. Rachel é conhecida por sua ética de trabalho impecável e sua habilidade de lidar com situações difíceis.
                </p>
            </div>
            <div>
                <h3 className='font-semibold'>Donna Paulsen</h3>
                <img className='w-80 h-100' src={donna} alt="" />
                <p>Donna é a assistente executiva de Harvey e é conhecida por sua inteligência, perspicácia e habilidades excepcionais de resolução de problemas. Ela desempenha um papel crucial no sucesso da empresa e é uma figura confiável para muitos dos personagens.</p>
            </div>
            <div>
                <h3 className='font-semibold'>Louis Litt</h3>
                <img className='w-80 h-100' src={louis} alt="" />
                <p>Louis é um dos principais sócios da empresa e inicialmente é um rival de Harvey. Ele é extremamente competitivo e muitas vezes luta para se destacar. Apesar de suas peculiaridades e excentricidades, ele é um advogado talentoso.</p>
            </div>
            <div>
                <h3 className='font-semibold'>Jessica Pearson</h3>
                <img className='w-80 h-100' src={jessica} alt="" />
                <p>Jessica é a sócia fundadora do escritório de advocacia Pearson Hardman e uma figura de autoridade respeitada na comunidade jurídica. Ela é inteligente, poderosa e determinada a manter a reputação e o sucesso da empresa.</p>
            </div>
        </div>

        <a href="https://www.netflix.com/br/title/70195800">Assista a série</a>
        
    </section>
  )
}
