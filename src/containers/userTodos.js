import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { addUserTodo } from '../actions/actions';

class UserTodos extends Component {
//export const Users = (props) => {
    constructor(props) {
        super(props);

        this.state = {
            todoTitleEntry: '',
            todoContentEntry: ''
        }

    }

    handleTodoTitleEntry = (event) => {
        console.log("Entering handleTodoTitleEntry");

        //create local variable - makes for easier debugging
        let localValue = event.target.value;

        //Update state
        this.setState({todoTitleEntry: localValue});

        console.log("Leaving handleTodoTitleEntry");
    }

    handleTodoContentEntry = (event) => {
        console.log("Entering handleTodoContentEntry");

        //create local variable - makes for easier debugging
        let localValue = event.target.value;

        //Update state
        this.setState({todoContentEntry: localValue});

        console.log("Leaving handleTodoContentEntry");
    }

    handleUserTodoAdd = () => {
        console.log("Entering handleUserTodoAdd");

        //prevent user from adding an empty value - Title Check
        if (this.state.todoTitleEntry.trim() === '')
        {
            console.log("Leaving handleAddUser - user tried to add an empty value - Title Entry");
            //do nothing, return
            return; 
        }

        //prevent user from adding an empty value - Content Check
        if (this.state.todoContentEntry.trim() === '')
        {
            console.log("Leaving handleAddUser - user tried to add an empty value - Content Entry");
            //do nothing, return
            return; 
        }

        //Get user ID from param - using local var to make potential debugging easier
        let localUserId = this.props.match.params.userID

        //Call store function/action to add new user
        this.props.addUserTodo(localUserId, this.state.todoTitleEntry, this.state.todoContentEntry);

        //user has been added, clear out current input
        this.setState({todoTitleEntry: '',
                       todoContentEntry: ''});

        console.log("Leaving handleUserTodoAdd");
    }

    mapUsersTodoListForDisplay = (userTodoItem, arrayIndex) => {
        return (
            <li key={"userTodoListItem" + arrayIndex}>{userTodoItem.todoTitle}</li>
        );
    }

    render() {
        
        let localUserId = this.props.match.params.userID;
        //console.log("In UserTodos Render: ", localUserId)

        //show items only for this user
        let localItemsList = this.props.itemsList.filter(userTodoItem => userTodoItem.userId === localUserId); 

        return (
            <div>
                <hr />
                <div className="row">
                    <div className="columns small-12 padding-top-medium">
                        <h2>{localUserId}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-2 padding-top-medium">
                        Add Todo: 
                    </div>
                    <div className="columns small-4 padding-top-medium">
                        <input placeholder="Enter Title Here" value={this.state.todoTitleEntry} onChange={this.handleTodoTitleEntry} key={"handleTodoTitle"}/>&nbsp;
                    </div>
                    <div className="columns small-4 padding-top-medium">
                        <input placeholder="Enter Content Here" value={this.state.todoContentEntry} onChange={this.handleTodoContentEntry} key={"handleTodoContent"}/>&nbsp;
                    </div>
                    <div className="columns small-2 padding-top-medium">
                        <button className="button btn-cta tiny" onClick={this.handleUserTodoAdd} key={"handleTodoAdd"}>Add Todo</button>
                    </div>
                </div>
                {localItemsList.length === 0 ? <div>Please Add Some User Todos</div> : 
                    <div>
                        <div className="row">
                            <div className="columns small-2 padding-top-medium">
                                &nbsp;
                            </div>
                            <div className="columns small-10 padding-top-medium">
                                {localUserId} Todos
                            </div>
                        </div>
                        <div className="row">
                            <div className="columns small-2 padding-top-medium">
                                User Todos
                            </div>
                            <div className="columns small-10 padding-top-medium">
                                <ul>
                                    {localItemsList.map(this.mapUsersTodoListForDisplay)}
                                </ul>
                            </div>
                        </div>
                   </div>
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
        addUserTodo: (userId, todoTitle, todoContent) => {
              dispatch(addUserTodo(userId, todoTitle, todoContent));
         }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserTodos);