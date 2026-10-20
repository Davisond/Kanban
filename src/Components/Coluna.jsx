import Card from './Card';

function Coluna (props){
    const cardColuna = props.cards.filter((card) => card.idColuna === props.id)


    return(
        <div className="coluna" onDragOver={(e)=>{e.preventDefault()}} onDrop={(e)=>{const idCard = Number(e.dataTransfer.getData('text/plain'))
        props.onMover(idCard, props.id)} }>
            
            
            <h2> { props.nome }</h2>
        {
            cardColuna.map((card) => {
                return( <Card key={card.id} id={card.id} titulo={card.titulo} onEditar={props.onEditar} />   )
            })

        }

        <button onClick={() => props.coluna_onAdicionar(props.id)}>
             Adicionar card </button>
    </div>
    )
}



export default Coluna;