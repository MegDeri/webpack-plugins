import React from 'react';
import style from './TodoList.css';

const TodoApp = props => {
    
    const listElement = props.list.map(elem => <li key={elem.id} id={elem.id} remove={props.removeTodo}>{elem.text}</li>)
    return (
        <ul className={style.todoApp}>
            <h4>{props.name}</h4>
            <div onClick={() => this.props.removeTodo(this.props.id)}>
                {listElement}
            </div>
        </ul> 
    )
}

export default TodoApp;