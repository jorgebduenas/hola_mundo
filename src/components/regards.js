import React from 'react'

class Regards extends React.Component{
    constructor(props){ //todas las propiedades que pueda recibir de otros componentes
        super()
    }


    render(){
        return(
            <div>
                <h1>Hola: {this.props.objectName.name}</h1>
            </div>
        )
    }
}

export default Regards