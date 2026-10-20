import { useState } from "react";

function Card (props){
    const [editando, setEditado] = useState(false);
    const [texto, setTexto] = useState(props.titulo);

    function salvar(){
        props.onEditar(props.id, texto)
        setEditado(false)
    }

    


    
    return(
        <div className='card'>
            {editando? (
                <input 
                    value = {texto}
                    onChange={(e) => setTexto(e.target.value)}
                    onBlur={salvar}
                    onKeyDown={(e) => e.key === 'Enter' && salvar()} 
                />
            ) : (
                <h3 onClick={() => setEditado(true)}>{ props.titulo }</h3>
            )}
        </div>

    )

    


}

export default Card;