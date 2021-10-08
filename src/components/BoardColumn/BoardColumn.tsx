import React from 'react';
import TodoCard from "../TodoCard/TodoCard";
import {ITODO} from "../../types/types";

interface boardColumnProps {
    title: string,
    todos: ITODO[],
    setStatusChange: any
}

const BoardColumn : React.FC<boardColumnProps> = ({title, todos, setStatusChange}) => {
    return (
        <div className="boardColumn">
            <header className="boardColumn-header"><h1 className="boardColumn-title">{ title }</h1></header>
            <div className="boardColumn-taskList">
                { todos && todos.map( (todo : any) => {
                    return(
                        <TodoCard key={todo.id} todo={todo} setStatusChange={setStatusChange} usage="board"/>
                    )
                } )}
            </div>
        </div>
    )
}
export default BoardColumn;