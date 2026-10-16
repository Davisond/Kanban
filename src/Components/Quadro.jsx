import Coluna from '../Components/Coluna'

function Quadro(){
    const colunas = [
        {id: 1, nome: 'To do'},
        {id: 2, nome: 'Doing'},
        {id: 3, nome: 'Done'}
    ]


    return(
        <div className = 'quadro'>
            <h1> Meu Kanban </h1>
          
          {
            colunas.map((coluna) => {
                return <Coluna key={coluna.id} nome={coluna.nome} />
            }
            )

          }
         


        </div>
    );
}


export default Quadro;