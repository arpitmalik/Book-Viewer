// Action Creator
// Returns an action and an object with type property.
export function selectBook(book){
    //Action  
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

