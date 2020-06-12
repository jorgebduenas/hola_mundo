import React from 'react'

class Button extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <button onClick={this.props.func} class="ui primary button">
                Comentar
            </button>
        )
    }
}
export default Button