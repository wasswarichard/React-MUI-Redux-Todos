import React from 'react';
import "./Board.sass"
import BoardColumn from "../BoardColumn/BoardColumn";
import {status} from "../../constants/status";
import {ITODO} from "../../types/types";

interface boardProps {
    todos: ITODO[] ,
    setStatusChange: () => {}
}

const Board : React.FC<boardProps> = ({todos, setStatusChange}) => {
    return (
        <div className="board">
            <BoardColumn title = "TODO"  todos = { todos?.filter( (todo: ITODO )=> {return todo.status === status[0]})} setStatusChange={setStatusChange} />
            <BoardColumn title = "IN_PROGRESS" todos = {todos?.filter( (todo: ITODO) => {return todo.status === status[1]})} setStatusChange={setStatusChange}/>
            <BoardColumn title = "DONE" todos = { todos?.filter( (todo: ITODO) => {return todo.status === status[2]})} setStatusChange={setStatusChange}/>
        </div>
    );
}
export default Board;