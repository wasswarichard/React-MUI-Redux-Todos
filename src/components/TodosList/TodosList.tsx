import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ITODO } from '../../interface/types';

interface todosListProps {
  todos: ITODO[];
  setStatusChange: (value: ITODO) => void;
}

const TodosList: React.FC<todosListProps> = ({ todos, setStatusChange }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 800 }} className="TodoList">
        <CardContent>
          <div className="boardColumn-taskList">
            {todos.length > 0 &&
              todos.map((todo: ITODO) => {
                return <TodoCard key={todo.id} todo={todo} setStatusChange={setStatusChange} usage="listTodos" />;
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default TodosList;
