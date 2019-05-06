import React from 'react'
import {connect} from 'react-redux'
import { chapterFetch } from '../../../Actions/chapterActions';
import ChapterText from './ChapterText'
import {withRouter} from 'react-router-dom'
class Chapter extends React.Component
{
componentWillMount()
{
    
        this.props.fetchChapter('/api/chapters/'
        +this.props.match.params.BookId+
        '/'
        +this.props.match.params.ChapterNumber);

}
render()
{

   console.log(this.props.CurrentChapter)
    return(<div>
        <ChapterText chapt={this.props.CurrentChapter}/>
        <div>
            <a href={'/Book/'+ 
            this.props.CurrentChapter.BookId+'/'
            +(this.props.CurrentChapter.ChapterNumber-1)}>Previous</a>
           <a href={'/Book/' + this.props.match.params.BookId}>Book</a>
            <a href={'/Book/'+   this.props.CurrentChapter.BookId+'/'
            +(this.props.CurrentChapter.ChapterNumber+1)}>Next</a>
        </div>
        </div>)
}
}
const mapStateToProps=state=>{
    return{
        CurrentChapter:state.chapter
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchChapter:url=>dispatch(chapterFetch(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chapter)
