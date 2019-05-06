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
                    <img src="./img/1.png" alt="booktitle"  className="image"></img>
                </div>
                <div className ="bookDiscription">
                    <div className="discrPoint">Name: {this.props.id} </div>
                    <div className="discrPoint">Name: {this.props.name} </div>
                    <div className="discrPoint">Author: {this.props.author} </div>
                    <div className="discrPoint">Discription: {this.props.discription}</div>
                </div>
                <div  className="bookbutton" onClick={()=>{
                     
                     this.props.history.push('/Book/' + this.props.id)}
                      }>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(Book)