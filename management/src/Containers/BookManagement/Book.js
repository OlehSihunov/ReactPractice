import React from 'react'
import { removeBook } from '../../Actions/bookActions';
import {connect} from 'react-redux'

 class Book extends React.Component
{
    clickHandler()
    {    
     this.props.removeBook(this.props.book._id);
     window.location.reload();
    }

    
    render(){
        return(<div className="Item">
            <p>{ this.props.book.name}</p>
            <p>{this.props.book.author}</p>
            <button className ="item-button"onClick = {()=>this.clickHandler()}>Delete</button>
        </div>)
    }
}
const mapStateToProps = state=>{
    return {
     
    };
  }
const mapDispatchToProps=dispatch=>{
    return {
      removeBook: id=>dispatch(removeBook(id))
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Book);