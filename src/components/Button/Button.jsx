import './Button.css';

export default function Button(props) {
    return (
        <>
            <button type={props.tipo} className={props.class}>
                {props.titulo}
            </button>
        </>
    );
}

/* props do button
    - titulo (Cadastrar, Login, Limpar)
    - tipo (submit, button, reset)
    - class (sucesso, alerta, erro)
*/
