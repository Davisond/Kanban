import Coluna from '../Components/Coluna';
import './Quadro.css'
import Card from '../Components/Card';
import { useState } from 'react'

function Quadro(){
    const colunas = [
        {id: 1, nome: 'To do'},
        {id: 2, nome: 'Doing'},
        {id: 3, nome: 'Done'}
    ]

    const [cards, setCards] = useState([
        {id: 1, titulo: 'teste', idColuna: 1},
        {id: 2, titulo: 'teste2', idColuna: 2},
        {id: 3, titulo: 'teste3', idColuna: 3},
    ])

    function adicionarCard(idColuna){
        const novoCard = {
            id: Date.now(),
            titulo: 'novo card',
            idColuna: idColuna
        }
        setCards([...cards, novoCard])
    }

    function editarCard(idCard, novoTitulo){
        setCards(
            cards.map((card)=>{
                if (card.id == idCard){
                    return { ...card, titulo: novoTitulo }
                }
                return card
            })
        )
    }

    function moverCard(idCard, idColunaDestino){
        setCards(
            cards.map((card)=>{
                if(card.id == idCard){
                    return{ ...card, idColuna: idColunaDestino }
                }
            return card
            })

        )

    }




    return(
        <div className = 'quadro'>
                <h1> Meu Kanban </h1>
            <div className='colunas'>
            {
                colunas.map((coluna) => {return <Coluna key={coluna.id} id={coluna.id} nome={coluna.nome} cards={cards} coluna_onAdicionar={ adicionarCard } onEditar={editarCard} onMover={moverCard}/> })

            }
            </div>

        </div>
    );
}


export default Quadro;