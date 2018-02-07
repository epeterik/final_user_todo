import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";
import { 
    BrowserRouter,
    Link,
    Route
  } from 'react-router-dom';

//App Imports

class TodoItem extends Component {
//export const Users = (props) => {
    constructor(props) {
        super(props);

        //bindings
        this.mapTodoListItemForDisplay = this.mapTodoListItemForDisplay.bind(this);
        this.filterForSpecificToDo = this.filterForSpecificToDo.bind(this);
    }

    mapTodoListItemForDisplay = (todoItem, arrayIndex) => {
        return (
            <div key={"toDoItem" + arrayIndex} className="row">
                <div className="columns small-1 padding-top-medium" key={"toDoItemSpacerColumn" + arrayIndex} >
                    &nbsp;
                </div>
                <div className="columns small-11 padding-top-medium" key={"toDoItemContentColumn" + arrayIndex} > 
                    <div className="row" key={"toDoItemHeaderRow" + arrayIndex}>
                        <h2 key={"toDoItemHeader" + arrayIndex}>{todoItem.todoTitle}</h2>
                    </div>
                    <div className="row" key={"toDoItemContentRow" + arrayIndex}>
                        <p key={"toDoItemContent" + arrayIndex}>{todoItem.todoContent}</p>
                    </div>
                </div>
            </div>
        );
    }

    filterForSpecificToDo = (todoItem) => {
        let localTodoID = this.props.match.params.todoID;
        console.log("filterForSpecificToDo ID to filter on: ", localTodoID);
        console.log(todoItem);
        console.log(todoItem.todoId);
        return (todoItem.todoId === parseInt(localTodoID)) ? true : false;
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("TodoItem Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);
        let localFilteredArray = this.props.itemsList.filter(this.filterForSpecificToDo);
        console.log("Filtered array: ", localFilteredArray);

        return (
            <div className="card padding-none" style={{margin: "5px"}}>
                {localFilteredArray.length === 0 ?
                    <div>Selct a todo item to see more details</div>
                    :
                    localFilteredArray.map(this.mapTodoListItemForDisplay)
                }
                    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemsList: state.itemList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        /*addNewUser: (user) => {
              dispatch(addNewUser(user));
         }*/
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);