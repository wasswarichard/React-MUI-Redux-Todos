import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profilePicture from '../../images/anonymous.jpg';
import 'font-awesome/css/font-awesome.min.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { status } from '../../constants/status';
import ActionGroup from '../ActionGroup/ActionGroup';
import { ITODO } from '../../interface/types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

interface todoCardProps {
  todo: ITODO;
  setStatusChange: (value: ITODO) => void;
  usage: string;
}

const useStyles = makeStyles(
  (theme) => ({
    card: {
      marginTop: '10px',
      minHeight: '60px',
    },
    content: {
      marginLeft: '60px',
      marginTop: '-40px',
    },
    author: {
      marginTop: '10px',
      paddingLeft: '25px',
    },
    avatar: {
      width: '50px',
      height: '50px',
    },
  }),
  { name: 'MuiButtonBase-root' }
);

const TodoCard: React.FC<todoCardProps> = ({ todo, setStatusChange, usage }) => {
  const styles = useStyles();
  const [disableApprove, setDisableApprove] = useState(false);
  const [disableDecline, setDisableDecline] = useState(false);

  const dispatch = useDispatch();
  const { todoApproved, todoDeclined } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (status.indexOf(todo.status) === 0) {
      setDisableDecline(true);
    }
    if (status.indexOf(todo.status) === status.length - 1) {
      setDisableApprove(true);
    }
  }, [todo.status]);

  const declineTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    todoDeclined({ ...todo });
    setStatusChange({ ...todo });
  };

  const approveTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    todoApproved({ ...todo });
    setStatusChange({ ...todo });
  };

  return (
    <Card sx={{ minWidth: 40 }} className={styles.card}>
      <Avatar className={styles.avatar} src={profilePicture} alt="profile picture" />
      <div className={styles.content}>
        <Typography>
          {todo.id}. <span>{todo.title}</span>
          {usage === 'listTodos' && <span style={{ marginLeft: '80px' }}>{todo.status}</span>}
        </Typography>
      </div>
      {usage === 'board' && (
        <ActionGroup
          approveTodo={approveTodo}
          declineTodo={declineTodo}
          disableApprove={disableApprove}
          disableDecline={disableDecline}
        />
      )}
    </Card>
  );
};
export default TodoCard;
