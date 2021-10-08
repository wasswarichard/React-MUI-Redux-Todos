import {createStore} from "redux";
import reducer from "../reducer/reducer";
import { ITODO } from "../../types/types";

const initialState : ITODO[]  = []
// @ts-ignore
const store = createStore(reducer, initialState);

export default store;