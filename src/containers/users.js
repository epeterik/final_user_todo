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
import { addNewUser } from '../actions/actions';
import UserTodos from './userTodos';
import { ShowActiveSideBarListLink } from '../components/activeLink';

class Users extends Component {
//export const Users = (props) => {
    constructor(props) {
        super(props);

        this.state = {
            addUserEntry: ''
        }

        //bindings
        this.mapUsersListForDisplay = this.mapUsersListForDisplay.bind(this);

    }

    handleUserEntry = (event) => {
        console.log("Entering handleUserEntry");

        //create local variable - makes for easier debugging
        let localValue = event.target.value;

        //Update state
        this.setState({addUserEntry: localValue});

        console.log("Leaving handleUserEntry");
    }

    handleAddUser = () => {
        console.log("Entering handleAddUser");

        //prevent user from adding an empty value
        if (this.state.addUserEntry.trim() === '')
        {
            console.log("Leaving handleAddUser - user tried to add an empty value");
            //do nothing, return
            return; 
        }

        //Call store function/action to add new user
        this.props.addNewUser(this.state.addUserEntry);

        //user has been added, clear out current input
        this.setState({addUserEntry: ''})

        console.log("Leaving handleAddUser");
    }

    mapUsersListForDisplay = (user, arrayIndex) => {
        let localPath = this.props.match.path;

        return (
            <ShowActiveSideBarListLink to={localPath + "/" + user} label={user} arrayIndex={arrayIndex} key={"sideBarLinkKey" + arrayIndex} />
        );

        //saving original map for future reference (in case of oops)
        //<li className="filter-nav-entry" key={"userListItem" + arrayIndex}><button key={"userButtonItem" + arrayIndex}>{user}</button></li>
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <div className="columns small-2 padding-top-medium">
                        <h3>Add User</h3>
                    </div>
                    <div className="columns small-6 padding-top-medium">
                        <input onChange={this.handleUserEntry} value={this.state.addUserEntry} />&nbsp;
                        <button className="button btn-cta tiny" onClick={this.handleAddUser}>Add</button>
                    </div>
                    <div className="columns small-4 padding-top-medium">
                        &nbsp;
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-2 padding-top-medium">
                        <ul className="filter-nav vertical">
                            <h6>Users</h6>
                            { this.props.usersList.length === 0 ? <div>Please Add Users</div> : this.props.usersList.map(this.mapUsersListForDisplay) }
                        </ul>
                    </div>
                    <div className="columns small-10 padding-vert-medium">   
                        <div className="row">
                            <div className="columns small-12 padding-vert-medium">   
                                <h1>Users</h1>
                                <p>Use this page to view a list of the current users as well as add new users and add To Do tasks to current users.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columns small-12 padding-vert-medium"> 
                                <Route path={localPath + "/:userID"} component={UserTodos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.userList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        addNewUser: (user) => {
              dispatch(addNewUser(user));
         }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users);