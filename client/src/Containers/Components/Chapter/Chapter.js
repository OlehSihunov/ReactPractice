import React from 'react'
import {connect} from 'react-redux'
import { chapterFetch } from '../../../Actions/chapterActions';
import ChapterText from './ChapterText'
import { chaptersGetLast } from '../../../Actions/chaptersActions';


class Chapter extends React.Component
{
componentWillMount()
{
    
        this.props.fetchChapter('/api/chapters/'
        +this.props.match.params.BookId+
        '/'
        +this.props.match.params.ChapterNumber);

        this.props.fetchLast('/api/chapters/'+this.props.match.params.BookId)

}
checkIndex=(Next)=>{
if(Next<0)
return this.props.CurrentChapter.ChapterNumber;

if(Next>this.props.Last)
return this.props.CurrentChapter.ChapterNumber;

return Next;
}
render()
{
    if(this.props.CurrentChapter.ChapterNumber===0)
    return(<div>
        <ChapterText chapt={this.props.CurrentChapter}/>
        <div>
           <a href={'/Book/' + this.props.match.params.BookId}>Book</a>
            <a href={'/Book/'+   this.props.CurrentChapter.BookId+'/'
            +this.checkIndex(this.props.CurrentChapter.ChapterNumber+1)}>Next</a>
        </div>
        </div>)
    if(this.props.CurrentChapter.ChapterNumber===this.props.Last)
    return(<div>
        <ChapterText chapt={this.props.CurrentChapter}/>
        <div>
            <a href={'/Book/'+ 
            this.props.CurrentChapter.BookId+'/'
            +this.checkIndex(this.props.CurrentChapter.ChapterNumber-1)}>Previous</a>
           <a href={'/Book/' + this.props.match.params.BookId}>Book</a>
        </div>
        </div>)
    return(<div>
        <ChapterText chapt={this.props.CurrentChapter}/>
        <div>
            <a href={'/Book/'+ 
            this.props.CurrentChapter.BookId+'/'
            +this.checkIndex(this.props.CurrentChapter.ChapterNumber-1)}>Previous</a>
           <a href={'/Book/' + this.props.match.params.BookId}>Book</a>
            <a href={'/Book/'+   this.props.CurrentChapter.BookId+'/'
            +this.checkIndex(this.props.CurrentChapter.ChapterNumber+1)}>Next</a>
        </div>
        </div>)
}
}
const mapStateToProps=state=>{
    
    return{
        CurrentChapter:state.chapter,
        Last:state.chapters
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchChapter:url=>dispatch(chapterFetch(url)),
        fetchLast:url=>dispatch(chaptersGetLast(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chapter)
