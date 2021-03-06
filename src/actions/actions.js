//App imports
import {ADD_USER, 
        ADD_USER_TODO} from './types';


export function addNewUser(userObject) {
    return {
        type: ADD_USER,
        payload: userObject
    }
}

const newUserTodo = () => {
    return {
        userId: '',
        todoTitle: '',
        todoContent: '', 
        todoId: 0
    }
}

export function addUserTodo(localUserId, localTodoTitle, localTodoContent, localTodoId) {

    let localUserTodo = newUserTodo();

    return {
        type: ADD_USER_TODO,
        payload: {...localUserTodo, userId: localUserId, todoTitle: localTodoTitle, todoContent: localTodoContent, todoId: localTodoId}
    }
}