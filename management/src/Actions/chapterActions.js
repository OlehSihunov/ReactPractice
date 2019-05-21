export function chapterFetchSucces(chapter){
    
    return {
        type:"CHAPTER_FETCH_SUCCESS",
        chapter
    }
}
export function chapterFetch(url){
    return (dispatch)=>{
        fetch(url).then(response=>{
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
           
            return response
        }).then(response=>response.json())
        .then(chapter=>{dispatch(chapterFetchSucces(chapter))})
    }
}
export function removeChapterSuccess()
{
    return {
        type :"BOOKS_REMOVE_SUCCESS"

    }
}
export function removeChapter(id)
{
    return(dispatch)=>{
        fetch('api/chapters/'+ id, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).then(()=>dispatch(removeChapterSuccess()));}
}

export function addChapter(chapt)
{
    return(dispatch)=>
    {
      
        
        fetch('api/chapters', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(chapt)
          }).then(res=>{ res.json()
          }).then(()=>dispatch(addChapterSuccess()));
        
    }
}
export function addChapterSuccess()
{
    return { 
        type:"CHAPTER_ADD_SUCCESS"
    }
    
}