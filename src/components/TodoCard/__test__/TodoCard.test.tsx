import React from "react";
import TodoCard from "../TodoCard";
import Enzyme, { shallow } from 'enzyme';
import {cleanup} from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() })

describe('<TodoCard>', () => {
    afterEach(cleanup)

    const statusFunction = () => {};
    const todoElement = {userId: 1, id: 1, title: "DONE", completed: true, status: "DONE"};

    it('renders BoardColumn Component', () => {
        shallow(<TodoCard todo={todoElement} usage="board" setStatusChange={statusFunction}/>);
    });

    it('should match snapshot', function () {
        const tree = TestRenderer.create(<TodoCard todo={todoElement} usage="board" setStatusChange={statusFunction}/>).toJSON();
        expect(tree).toMatchSnapshot();

    });
});