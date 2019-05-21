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
    
    this.props.addChapter(this.state)
   }
    render()
    {
        
        return(
            <div className = "addChapterForm">
            <select value={this.state.BookId} 
              onChange={(e) => this.setState({BookId: e.target.value})}>
                <option value=""></option>
                {this.props.books.map((book)=>{
                    return <option value ={book._id} key ={book._id}>{book.name}</option>
                })}}
            </select>
            <input type="text" className="" onChange={(e) => this.setState({Title: e.target.value})}  name="title" />
            <input type="text" className="" onChange={(e) => this.setState({Text: e.target.value})}  name="title" />
            <input type="text" className="" onChange={(e) => this.setState({ChapterNumber: e.target.value})}  name="title" />
            <button onClick= {()=>this.clickHandler()}>AddChapter</button>
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
  