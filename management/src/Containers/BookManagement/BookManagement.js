import React from 'react';
import {connect} from "react-redux";
import {booksFetchData} from "../../Actions/bookActions";
import Book from './Book';
class BookManagement extends React.Component
{
    componentWillMount()
    {
        this.props.fetchData("/api/books")
    }
    render()
    {
        return(
            <div className="itemCol">
            {this.props.books.map((book)=>
                {
                   return <Book book = {book} key = {book._id}/>
                })}
            </div>
        )
    }
 
}
const mapStateToProps = state=>{
    return {
      books:state.books
    };
  }
  
  const mapDispatchToProps=dispatch=>{
    return {
      fetchData: url=>dispatch(booksFetchData(url))
    };
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(BookManagement);