
export function booksFetchDataSucces(books){
    return {
        type:"BOOKS_FETCH_DATA_SUCCESS",
        books
    }
}
export function booksFetchData(url){
    return (dispatch)=>{
        fetch(url).then(response=>{
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
            return response
        }).then(response=>response.json())
        .then(books=> dispatch(booksFetchDataSucces(books)))
    }
}

export function removeBookSucces()
{
    return {
        type :"BOOKS_REMOVE_SUCCESS"

    }
}
export function removeBook(id)
{
    return(dispatch)=>{
        fetch('api/book/'+ id, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).then(()=>dispatch(removeBookSucces()));}
}