import './CardImovel.css';

export default function CardImovel(props) {
    // console.log(props);
    
    return (
        <>
            <article id={props.id} className='imovel'>
                
                {/* TO DO: login */}

                {/* <div className="foto">
                    <img src={props.imovel.foto} alt="" />
                </div>

                <div className="conteudo">
                    <h3>{props.imovel.titulo}</h3>

                    <p>{props.imovel.descricao}</p>
                </div>

                <div className="info">
                    <div className='DADOS'>
                        <div>
                            Localização: {props.imovel.localizacao}
                        </div>

                        <span>
                            Quartos: {props.imovel.quartos} |
                        </span>

                        <span>
                            Área: {props.imovel.area} m²
                        </span>
                        
                        <div className="valor-imovel">
                            {props.imovel.valor.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </div>

                        {/* TO DO: BOTAO DE EXCLUIR /}
                    </div>
                </div> */}

            </article>
        </>
    );
}