//Creacion del componentes

import React from 'react'
import Regards from'./regards'


//Diferentes maneras de declarar componentes funcionales
//  const App = () =>{
//    return <div>Hola Mundo</div>
//  }
//  function App(){
//      return <div></div>
//  }

export default class App extends React.Component{
    constructor(){   // constructor del componentes
        super()
        this.state = { //estado principal, declaración de estado
            name: 'Alberto',  //propiedades
            lastname: 'Trujillo'
        }

        //this.changeState = this.changeState.bind(this) //Ya no se necesita cuando tenemos el arrow function, único método para la función unica changeState()
        
/*      
        this.changeJorge = this.changeJorge.bind(this)      //bind es palabra reseervada, bind(this) vinculará   
        this.changeManuel = this.changeManuel.bind(this)    //todo lo que hay en el this el omponente   
        this.changeCarlos = this.changeCarlos.bind(this)    //en el this de la funcion ChangeState
*/
    }

/*
    changeJorge(){ //funcion ChangeState contiene parametros, propiedades o metodos
        this.setState({name:'Jorge',lastname:'Bautista'}) // metodo de react desde React.Component
    }

    changeManuel(){
        this.setState({name:'Omar',lastname:'Rodriguez'})
    }

    changeCarlos(){
        this.setState({name:'Carlos',lastname:'Gonzalez'})
    }
*/
    changeState(objectName){
        this.setState(objectName)
    }

    render(){
        return (
            <div>
                <Regards objectName={this.state}/>
                <button onClick={() => this.changeState({name:'Jorge',lastname:'Bautista'})}>Jorge</button>
                <button onClick={() => this.changeState({name:'Fernando',lastname:'Jimenez'})}>Fernando</button>
                <button onClick={() => this.changeState({name:'Ana',lastname:'Suarez'})}>Ana</button>
                <button onClick={this.changeJorge}>Jorge</button>
                <button onClick={this.changeManuel}>Manuel</button>
                <button onClick={this.changeCarlos}>Carlos</button>             
            </div>
        )
    }
}

// export default App  también se puede exportar de esta manera