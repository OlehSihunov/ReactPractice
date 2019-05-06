import React, {Component} from 'react';
import {connect} from "react-redux";
import {booksFetchData} from "../../Actions/bookActions";
import Book from './Book/Book';


 class BookMin extends Component{
    componentDidMount()
    {
      this.props.fetchData("/api/books");
     
    }

 
    
    render()
    {
      console.log(this.props)
        return(
        <div  >
            {this.props.books.map((book)=>{
              return <Book key={book._id} id = {book._id} name = {book.name} author = {book.author} discription = {book.discription}/>
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