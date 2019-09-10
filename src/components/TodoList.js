import React from 'react';
import style from './TodoList.css';

class Li extends React.Component {
    render (){
        return (<li onClick={this.props.onClick}>{this.props.text}</li>);
    }
}


const TodoApp = props => {
    
    const listElement = props.list.map(elem => <li key={elem.id} id={elem.id} remove={props.removeTodo}>{elem.text}</li>)
    return (
        <ul className={style.todoApp}>
            <h4>{props.name}</h4>
            
           <Li onClick={this.removeTodo.bind(this)}> {listElement} </Li>    
            
        </ul> 
    )
}

export default TodoApp;