import React from 'react';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface actionGroupProps {
    disableDecline: boolean,
    disableApprove: boolean,
    declineTodo: (event : React.MouseEvent<HTMLButtonElement>) => void,
    approveTodo: (event : React.MouseEvent<HTMLButtonElement>) => void,
}

const ActionGroup : React.FC<actionGroupProps> = ({disableDecline, disableApprove, declineTodo, approveTodo}) => {
    return (
        <div>
            <hr/>
            <CardActions>
                {! disableDecline && <Button size="small" color="primary" onClick={declineTodo}>Decline</Button>}
                {! disableApprove && <Button  size="small" color="secondary" onClick={approveTodo}>Approve</Button>}
            </CardActions>
        </div>

    );
}
export default ActionGroup;