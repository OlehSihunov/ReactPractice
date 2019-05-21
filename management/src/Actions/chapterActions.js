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