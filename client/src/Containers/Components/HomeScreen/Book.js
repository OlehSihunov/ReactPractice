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
                    <div className="discrPoint">Name: {this.props.name} </div>
                    <div className="discrPoint">Author: {this.props.author} </div>
                </div>
                <div  className="bookbutton" onClick={()=>{
                     
                     this.props.history.push('/Book/' + this.props.id)}
                      }>
                    <p>Read</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Book)