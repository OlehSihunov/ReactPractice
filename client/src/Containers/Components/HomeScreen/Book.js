import React from 'react';
import './Book.css';
import {withRouter} from 'react-router-dom'
export  class Book extends React.Component
{
    render()
    {
 
        return(
            <div className="bookBlock">
                <div className = "bookImage" >
                    <img src={'../img/'+this.props.id+'.png'} alt="booktitle"  className="image"></img>
                </div>
                <div className ="bookDiscription">
                    <div className="discrPoint">{this.props.name} </div>
                    <div className="discrPoint">{this.props.author} </div>
                </div>
                <a href="#"  className="bookbutton" onClick={()=>{
                     
                     this.props.history.push('/Book/' + this.props.id)}
                      }>
                    <p>Read</p>
                </a>
            </div>
        )
    }
}
export default withRouter(Book)