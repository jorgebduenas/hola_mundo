//Creacion del componentes
import React from 'react'
import Faker from 'faker'
import Comments  from './comments'
import Button from './button'

//Diferentes maneras de declarar componentes funcionales
//  const App = () =>{
//    return <div>Hola Mundo</div>
//  }
//  function App(){
//      return <div></div>
//  }

class App extends React.Component{
    constructor(){                    // constructor del componente
        super()
        //state para valor comments
            this.state={
                comments: []
            }
        /*  this.state = { //estado principal, declaración de estado
            name: 'Alberto',  //propiedades
            lastname: 'Trujillo' */
            this.addComment = this.addComment.bind(this)
        }

        addComment(){
            let comment = {
                userAvatar: Faker.image.avatar(),
                name: Faker.name.firstName(),
                date: Date.now().toLocaleString(),
                comment: Faker.lorem.paragraph()
            }
            let copyState = this.state.comments
            copyState.push(comment)
            this.setState({comments:copyState})
        }

/*      this.changeState = this.changeState.bind(this) Ya no se necesita cuando tenemos el arrow function, único método para la función unica changeState()
        this.changeJorge = this.changeJorge.bind(this)      //bind es palabra reseervada, bind(this) vinculará   
        this.changeManuel = this.changeManuel.bind(this)    //todo lo que hay en el this el omponente   
        this.changeCarlos = this.changeCarlos.bind(this)    //en el this de la funcion ChangeState
*/

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

    changeState(objectName){
        this.setState(objectName)
    }
*/
    render(){
        return (
            <div>
                {/*<Comments
                    userAvatar={Faker.image.avatar()} 
                    name={Faker.name.firstName()}
                    date={Date.now().toLocaleString()}
                    comment={Faker.lorem.paragraph()}
                />*/}       

                <Button func={this.addComment}/>
                {
                    this.state.comments.map((comment)=>{
                        return <Comments 
                            userAvatar={comment.userAvatar}
                            name={comment.name}
                            date={comment.date}
                            comment={comment.comment}
                        />
                    })
                }

                <Comments/>
                
            </div>
        )
    }
}

export default App  // también se puede exportar de esta manera