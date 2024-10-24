import Button from '../../components/Button/Button';
import CardImovel from '../../components/CardImovel/CardImovel';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import Main from '../../components/Main/Main';
import Nav from '../../components/Nav/Nav';

const listaImoveis = [
    {
        "id": 1,

        "titulo": "Apart. 3 dorm. Papicu",
        "descricao": "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.",
        "valor": 800000,
        "area": 90,
        "quartos": 3,
        "tipo": "apartamento",
        "localizacao": "Santos Dummont, Papicu",
    
        "mapa": "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3752203335343!2d-38.52586952782257!3d-3.728109443164852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74881b09b88ef%3A0xe6f7c3f410959f98!2sAv.%20Santos%20Dumont!5e0!3m2!1spt-BR!2sbr!4v1729100381171!5m2!1spt-BR!2sbr' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    
        "venda_aluguel": "venda",
        "finalidade": "residencial",
        "fotos": [
            "https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg",
    
            "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
            "https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360",
        ],
        "status": false
      }
];

// Page
function Home() {
    return(
        <>
            <Header logo="ImobiTech" />
            
            <Nav />

            <main>
                <h2>Página Home</h2>

                <section id="imoveis">
                    {/* <CardImovel id="Teste" /> */}

                    {/* {listaImoveis.forEach(imovel => {
                        <CardImovel id="teste 1" />
                    })} */}

                    {/* Adiciona os cards por JS (React) */}
                    {/* {listaImoveis.forEach((imovel) => {
                        <CardImovel imovel={imovel}
                            // key={index}
                            // id={imovel.id}
                            // foto={imovel.fotos[0]}
                            // titulo={imovel.titulo}
                            // descricao={imovel.descricao}
                            // localizacao={imovel.localizacao}
                            // quartos={imovel.quartos}
                            // area={imovel.area}
                            // valor={imovel.valor}
                        />
                    })} */}


                    {/* <CardImovel
                        id=
                        foto=
                    /> */}
                </section>
            </main>

            {/* <Main
                titulo="Bem-vindo(a) à ImobiTech"
                texto1="Veritatis iste beatae, quam eum mollitia similique corporis enim non placeat? Aspernatur libero rem numquam. Esse nobis harum veniam obcaecati, in earum."
            /> */}

            {/* <Main /> */}

            <Footer contato="contato@imobitech.com.br" />
        </>
    );
}

export default Home;
