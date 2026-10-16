import Card from './Card';

function Coluna (props){
    const cardColuna = props.cards.filter((card) => card.idColuna === props.id)


    return(
        <div className="coluna">
            <h2> { props.nome }</h2>
        
    
        {
            cardColuna.map((card) => {
                return( <Card titulo = {card.titulo} />   )
            })

        }
    </div>
    )
}



export default Coluna;