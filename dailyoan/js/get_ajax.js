'use strict'

export async function saveUser(userInfo) {
    userInfo = { catnip : window.localStorage.getItem('catnip'), lvl : window.localStorage.getItem('lvl') };
    $.get('ajax_save.php', userInfo, ajaxLoaded);
    
}

/*export async function fetchToDoList() {
    const response = await fetch('get_todolist.php');
    const todo = await response.json();
    const todolist = [];
    console.log(todo);
    for (let i = 0; i < todo.length; i++) {
        todolist.push(todo[i]);
    }
    console.log(todolist);
    return todolist;
    
}*/

export async function fetchToDoList(data) {
    $.get('get_todolist.php', ajaxLoaded);
}

export function ajaxLoaded(data) {
    console.log(data);
}