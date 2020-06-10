//Importacion de librerias y modulos
import React from 'react' 
import ReactDom from 'react-dom'

//Creacion de componente 
//Diferentes maneras de declarar componentes funcionales
//  const App = () =>{
//    return <div>Hola Mundo</div>
//    }
//  function App(){
//      return <div></div>>
//  }


//Componente de clase
class App extends React.Component{
    constructor(){   
        super()    
    }
    render(){
        return (
            <div>
                <h1>Hola</h1>
                <h2>mundo</h2>
            </div>
        )
    }
}

//Rendeerizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)
