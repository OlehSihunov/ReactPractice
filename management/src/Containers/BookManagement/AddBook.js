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
            window.location.reload();
    }
    render()
    {
        return(
            <div className="addBook">
                <h1>Додати Книгу</h1>
                <label>Назва книги</label>
                <input type="text" className="" 
                onChange={(e) => this.setState({name:e.target.value})}  name="title" />
                <label>Автор книги </label>
                <input type="text" className=""
                onChange={(e) => this.setState({author: e.target.value})}  name="title" />
                  <label>Опис книги </label>
                  <textarea  className="bigInput"
                onChange={(e) => this.setState({discription: e.target.value})}  />
                
               <label>Перекладач</label>
                <input type="text" className=""
                onChange={(e) => this.setState({translator: e.target.value})}  name="title" />
                <label>Назва обгортки книги</label>
                  <input type="text" className=""
                onChange={(e) => this.setState({ImageName: e.target.value})}  name="title" />
                <button onClick={()=>this.clickHandler()}>Додати книгу на сайт</button>
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