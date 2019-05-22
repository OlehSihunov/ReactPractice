import React from 'react'
import {connect} from 'react-redux'
import { addChapter } from '../../Actions/chapterActions';
import {booksFetchData} from '../../Actions/bookActions'
 class AddChapter extends React.Component
{
    state={
        BookId:"",
        Title:"",
        Text:"",
        ChapterNumber:0,
        DatePublish: new Date()
    }
    componentWillMount()
  {
    this.props.fetchBookData("/api/books");
    
  }
   clickHandler()
   {
    console.log(this.state)
    this.props.addChapter(this.state)
    window.location.reload();
   }
    render()
    {
        
        return(
            <div className = "addBook">
              <h1>Додати нову главу</h1>
              <label>Вибрати книгу</label>
            <select value={this.state.BookId} 
              onChange={(e) => this.setState({BookId: e.target.value})}>
                <option value=""></option>
                {this.props.books.map((book)=>{
                    return <option value ={book._id} key ={book._id}>{book.name}</option>
                })}}
            </select>
           <label> Назва глави</label>
            <input type="text" className="" onChange={(e) => this.setState({Title: e.target.value})}  name="title" />
            <label>Текст глави</label>
            <textarea  className="bigInput" onChange={(e) => this.setState({Text: e.target.value})}  name="title" />
           <label>Номер Глави</label>
            <input type="text" className="" onChange={(e) => this.setState({ChapterNumber: Number(e.target.value)})}  />
            
            <button onClick= {()=>this.clickHandler()}>Додати главу на сайт</button>
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
      addChapter:chapt=>dispatch(addChapter(chapt))
    };
  }
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddChapter);
  