import React, {useState, useEffect} from 'react';
import Board from "../Board/Board";
import Typography from '@material-ui/core/Typography';
import TodosList from "../TodosList/TodosList";
import axios from "axios";
import config from "../../utils/config.json";
import {todosAdded} from "../../state/actions/actions";
import {makeStyles} from "@material-ui/core/styles";
import store from "../../state/store/store";
import {ITODO} from "../../types/types";


const useStyles = makeStyles((theme) => ({
    heading1: {
        marginLeft: "20%",
    },
    heading2: {
        marginLeft: "10%",
    },
}), { name: "MuiButtonBase-root" });

const Todos = () => {
    const styles = useStyles();
    const [todos , setTodos] = useState<ITODO[]>([]);
    const [statusChange, setStatusChange] = useState({});

    useEffect(() => {
        axios.get(`${config.apiUrl}`)
            .then(response => {
                response.data.map((todo : ITODO) => todo.status = "TODO");
                store.dispatch(todosAdded(response.data))
                setTodos(response.data)
            });

    }, []);

    useEffect(() => {
        const newTodos : ITODO[] = store.getState().todos;
        setTodos([...newTodos]);
    }, [statusChange])

    return (
        <div>
            <Typography gutterBottom variant="h5" className={styles.heading1}>Tickets List</Typography>
            {todos && <TodosList todos={todos} setStatusChange={setStatusChange}/>}
            <Typography gutterBottom variant="h5" className={styles.heading2}>Board</Typography>
            {todos && <Board todos={todos} setStatusChange={setStatusChange}/>}
        </div>
    );
}
export default Todos;