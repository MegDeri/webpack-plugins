import React from 'react';
import style from './TodoList.css';

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.removeClickLi = this.removeClickLi.bind(this);
    }

    removeClickLi(clickLi) {
        this.props.onClick(clickLi);
    }

    render () {
        const listElement = this.props.list.map(elem => {
            return(
                <li key={elem.id} id={elem.id} onClick={() => this.removeClickLi(elem.id)}>
                    {elem.text}
                </li>
            )});
            return (
                <ul className={style.todoApp}>
                    <h4>{this.props.name}</h4>
                    {listElement}     
                </ul> 
            )
    }

}


export default TodoApp;