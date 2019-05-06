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
            <button>Previous</button>
            <button onClick={()=>{ this.props.history.push('/Book/' + this.props.match.params.BookId)}}>Book</button>
            <button>Next</button>
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
