import React from 'react'                           //Importacion de modulo react
import Faker from 'faker'                           //Importacion de modulo faker

class Comments extends React.Component{
    constructor(props){
        super()
        this.state = {                              //creacion  de estados
            /*userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()*/
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment
        }
    }

    render(){
        return(
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        <img src={this.state.userAvatar}/>
                    </a>
                    <div className="content">
                        <a className="author">{this.state.name}</a>
                        <div className="metadata">
                        <div className="date">{this.state.date}</div>
                        </div>
                            <div className="text">
                                {this.state.comment}
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Comments