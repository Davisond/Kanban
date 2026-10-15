import Coluna from '../Components/Coluna'

function Quadro(){
    return(
        <div className = 'quadro'>
            <h1> Meu Kanban </h1>
            <Coluna nome='To do' />
            <Coluna nome='Doing' />
            <Coluna nome='Done' />


        </div>
    );
}


export default Quadro;