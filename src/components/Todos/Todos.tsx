import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TodosList from '../TodosList/TodosList';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';
import { bindActionCreators } from 'redux';
import Board from '../Board/Board';
import config from '../../utils/config.json';
import { ITODO } from '../../interface/types';
import { RootState } from '../../state/reducer';

const useStyles = makeStyles(
  (theme) => ({
    heading1: {
      marginLeft: '20%',
    },
    heading2: {
      marginLeft: '10%',
    },
  }),
  { name: 'MuiButtonBase-root' }
);

const Todos = () => {
  const styles = useStyles();
  const [todos, setTodos] = useState<ITODO[]>([]);
  const [statusChange, setStatusChange] = useState<ITODO>({
    completed: false,
    id: 0,
    status: '',
    title: '',
    userId: 0,
  });

  const newTodos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const { todosAdded } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    axios.get(`${config.apiUrl}`).then((response) => {
      response.data.map((todo: ITODO) => (todo.status = 'TODO'));
      todosAdded(response.data);
      setTodos(response.data);
    });
  }, []);

  useEffect(() => {
    setTodos([...newTodos]);
  }, [newTodos, statusChange]);

  return (
    <div>
      <Typography gutterBottom variant="h5" className={styles.heading1}>
        Tickets List
      </Typography>
      {todos && <TodosList todos={todos} setStatusChange={setStatusChange} />}
      <Typography gutterBottom variant="h5" className={styles.heading2}>
        Board
      </Typography>
      {todos && <Board todos={todos} setStatusChange={setStatusChange} />}
    </div>
  );
};
export default Todos;
