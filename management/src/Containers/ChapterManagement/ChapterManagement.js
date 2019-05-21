import React from 'react';
import {connect} from "react-redux";
import {chaptersFetchData} from "../../Actions/chaptersActions";
class ChapterManagment extends React.Component
{
    componentWillMount()
    {
        this.props.fetchData("/api/chapters")
    }
    render()
    {
        return(
            <div>
            {this.props.chapters.map((chapter)=>
                {
                   return <p key = {chapter._id}>{chapter.Title}</p>
                })}
            </div>
        )
    }
 
}
const mapStateToProps = state=>{
    return {
      chapters:state.chapters
    };
  }
  
  const mapDispatchToProps=dispatch=>{
    return {
      fetchData: url=>dispatch(chaptersFetchData(url))
    };
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ChapterManagment);