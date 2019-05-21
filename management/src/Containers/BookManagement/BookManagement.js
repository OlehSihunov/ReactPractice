import React from 'react';
import {connect} from "react-redux";
import {booksFetchData} from "../../Actions/bookActions";
class BookManagement extends React.Component
{
    componentWillMount()
    {
        this.props.fetchData("/api/books")
    }
    render()
    {
        return(
            <div>
            {this.props.books.map((book)=>
                {
                   return <p key = {book._id}>{book.name}</p>
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