import React from 'react';
import {connect} from "react-redux";
import {booksFetchData} from "../../../Actions/bookActions";
import BookElement from './BookElem';
import {chaptersFetchData} from "../../../Actions/chaptersActions";

 class BookPage extends React.Component
{
    
 
    componentWillMount()
    {
      this.props.fetchBookData('/api/book/'+this.props.match.params.id);
      console.log('/api/book/'+this.props.match.params.id);
      this.props.fetchChapterData('/api/chapters/'+this.props.match.params.id);
    }
    render()
    {
      console.log('!!!')
      console.log(this.props)
          return(
             <div className="container single-book">
                <BookElement book={this.props.book} chapters = {this.props.chapters}></BookElement>   
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
      book:state.books,
      chapters:state.chapters
    };
  }
  
  const mapDispatchToProps=dispath=>{
    return {
      fetchBookData: url=>dispath(booksFetchData(url)),
      fetchChapterData: url=>dispath(chaptersFetchData(url))
    };
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(BookPage);