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
                    <img src={'../img/'+this.props.book.ImageName } alt="booktitle"  className="image"></img>
                </div>
                <div className ="bookDiscription">
                    <div className="discrPoint">{this.props.book.name} </div>
                    <div className="discrPoint">{this.props.book.author} </div>
                </div>
                <p className="bookbutton" onClick={()=>{
                     
                     this.props.history.push('/Book/' + this.props.book._id)}
                      }>
                    Read
                </p>
            </div>
        )
    }
}
export default withRouter(Book)