import React from 'react'
import {connect} from 'react-redux'
import { addBook } from '../../Actions/bookActions';
import {booksFetchData} from '../../Actions/bookActions';

 class AddBook extends React.Component
{
    state={
        name:"",
        author:"",
        discription:"",
        translator:"",
        ImageName:""
    }
    clickHandler()
    {
        console.log(this.state)
            this.props.addBook(this.state)
    }
    render()
    {
        return(
            <div className="AddBook">
                <h1>Add book</h1>
                <label>name</label>
                <input type="text" className="" 
                onChange={(e) => this.setState({name:e.target.value})}  name="title" />
                <br></br><label>author</label>
                <input type="text" className=""
                onChange={(e) => this.setState({author: e.target.value})}  name="title" />
                  <br></br><label>discription</label>
                  <input type="text" className=""
                onChange={(e) => this.setState({discription: e.target.value})}  name="title" />
                
                <br></br><label>translator</label>
                <input type="text" className=""
                onChange={(e) => this.setState({translator: e.target.value})}  name="title" />
                 <br></br><label>ImageName</label>
                  <input type="text" className=""
                onChange={(e) => this.setState({ImageName: e.target.value})}  name="title" />
                <button onClick={()=>this.clickHandler()}>Add Book</button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
      books:state.books,
      chapters:state.chapters
    };
  }
  
  const mapDispatchToProps=dispatch=>{
    return {
      fetchBookData: url=>dispatch(booksFetchData(url)),
      addBook: book=>dispatch(addBook(book))
    };
  }
  


export default connect(mapStateToProps,mapDispatchToProps)(AddBook)