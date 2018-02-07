import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";
import { 
    BrowserRouter,
    Link,
    Route
  } from 'react-router-dom';
import TodoItem from './todoItem';

//App Imports
import { ShowActiveSideBarListLink } from '../components/activeLink';

class Todo extends Component {
//export const Users = (props) => {
    constructor(props) {
        super(props);

        //bindings
        this.mapTodoListForDisplay = this.mapTodoListForDisplay.bind(this);

    }

    mapTodoListForDisplay = (todoItem, arrayIndex) => {
        let localPath = this.props.match.path; 
        console.log("Entering mapTodoListForDisplay - localPath: ", localPath);
        console.log(todoItem);
        console.log(todoItem.todoId);
        return (
            <li key={"todoListItem" + arrayIndex}><Link to={localPath + "/" + todoItem.todoId}>{todoItem.todoTitle + " - " + todoItem.userId}</Link></li>
        );
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <div className="columns small-3 padding-top-medium">
                        <h3>All Todos</h3>
                    </div>
                    <div className="columns small-9 padding-top-medium">
                        &nbsp;
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-3 padding-top-medium" style={{paddingLeft: "30px", paddingBottom: "30px"}}>
                        <ul className="filter-nav vertical">
                            { this.props.itemsList.length === 0 ? 
                                <div>Please Add Users Todos</div> : 
                                this.props.itemsList.map(this.mapTodoListForDisplay) }
                        </ul>
                    </div>
                    <div className="columns small-9 padding-top-medium">
                        <Route path={localPath + "/:todoID"} component={TodoItem}/>
                    </div>
                </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);