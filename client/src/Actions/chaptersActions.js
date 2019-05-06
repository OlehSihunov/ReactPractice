
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
        .then(chapters=>{dispatch(chaptersFetchDataSucces(chapters))})
    }
}


