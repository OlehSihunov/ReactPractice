import React from 'react'

import {connect} from 'react-redux'
import { removeChapter } from '../../Actions/chapterActions';

 class Chapter extends React.Component
{
    clickHandler()
    {    
     this.props.removeChapter(this.props.chapter._id);
     window.location.reload();
    }

    
    render(){
        return(<div className="Item">
            <p>{this.props.chapter.BookId}</p>
            <p>{ this.props.chapter.Title}</p>
            
            <button class ="item-button"onClick = {()=>this.clickHandler()}>Delete</button>
        </div>)
    }
}
const mapStateToProps = state=>{
    return {
     
    };
  }
const mapDispatchToProps=dispatch=>{
    return {
      removeChapter: id=>dispatch(removeChapter(id))
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Chapter);