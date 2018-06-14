import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li
                  key={book.title}
                  onClick = {()=> this.props.selectBook(book)}
                  className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
   
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//This function is the glue between react and redux.
function mapStateToProps(state){
    return{
        //whatever gets returned will show as this.props inside BookList
        books: state.books
    };
}

// returned object will end up as props on BookList container.
function mapDispatchToProps(dispatch){
    //when selectBook is called, result is passed to all reducers.
    return bindActionCreators({selectBook: selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);