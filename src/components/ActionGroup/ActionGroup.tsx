import React from 'react';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const ActionGroup = (
    {disableDecline, disableApprove, declineTodo, approveTodo
    }: { disableDecline: boolean, disableApprove: boolean, declineTodo: any, approveTodo: any
    }) => {
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