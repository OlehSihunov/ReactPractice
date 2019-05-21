import React, {Component} from 'react';
import {connect} from "react-redux";
import {booksFetchData} from "../../../Actions/bookActions";
import Book from './Book';



 class BookMin extends Component{
    componentDidMount()
    {
      this.props.fetchData("/api/books");
     
    }

 
    
    render()
    {
     
        return(
        <div  className="BookMin" >
            {this.props.books.map((book)=>{
              return <Book book={book} key = {book._id}/>
            })}
        </div>)
    }
}


const mapStateToProps = state=>{
    return {
      books:state.books
    };
  }
  
  const mapDispatchToProps=dispath=>{
    return {
      fetchData: url=>dispath(booksFetchData(url))
    };
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(BookMin);