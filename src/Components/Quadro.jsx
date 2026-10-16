import Coluna from '../Components/Coluna';
import Card from '../Components/Card';

function Quadro(){
    const colunas = [
        {id: 1, nome: 'To do'},
        {id: 2, nome: 'Doing'},
        {id: 3, nome: 'Done'}
    ]
    const cards = [
        {id: 1, titulo: 'teste', idColuna: 1},
        {id: 2, titulo: 'teste2', idColuna: 2},
        {id: 3, titulo: 'teste3', idColuna: 3},
    ]


    return(
        <div className = 'quadro'>
            <h1> Meu Kanban </h1>       
          {
            colunas.map((coluna) => {
                return <Coluna key={coluna.id} id={coluna.id} nome={coluna.nome} cards={cards} /> }
                
                
            )
          }
        </div>
    );
}


export default Quadro;