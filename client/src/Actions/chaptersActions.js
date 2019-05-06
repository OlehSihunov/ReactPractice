
export function chaptersFetchDataSucces(chapters){
 
    
    return {
        type:"CHAPTERS_FETCH_DATA_SUCCESS",
        chapters
        
    }
}
export function chaptersFetchData(url){
    return (dispatch)=>{
        fetch(url).then(response=>{
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
            return response
        }).then(response=>response.json())
        .then(chapters=>{chapters= chapters.sort((a,b)=>{if ( a.ChapterNumber < b.ChapterNumber){
            return -1;
          }
          if (  a.ChapterNumber < b.ChapterNumber){
            return 1;
          }
          return 0;
        })
            dispatch(chaptersFetchDataSucces(chapters))})
    }
}
export function chaptersGetLastSucces(chapters)
{
    
     let last =  chapters.length-1;
     
    return{
        type: "CHAPTERS_LAST_GET_SUCCES",
        last
    }
}
export function chaptersGetLast(url){
    return (dispatch)=>{
        fetch(url).then(response=>{
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
            return response
        }).then(response=>response.json())
        .then(chapters=>{
            chapters= chapters.sort((a,b)=>{if ( a.ChapterNumber < b.ChapterNumber){
                return -1;
              }
              if (  a.ChapterNumber < b.ChapterNumber){
                return 1;
              }
              return 0;
            })
            dispatch(chaptersGetLastSucces(chapters))})
    }
}
