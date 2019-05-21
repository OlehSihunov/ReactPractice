
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

export function removeBookSuccess()
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
        }).then(()=>dispatch(removeBookSuccess()));}
}

export function addBook(book)
{
    return(dispatch)=>
    {
      
        
        fetch('api/book', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(book)
          }).then(res=>{ res.json()
          }).then(()=>dispatch(addBookSuccess()));
        
    }
}
export function addBookSuccess()
{
    return { 
        type:"BOOK_ADD_SUCCESS"
    }
    
}