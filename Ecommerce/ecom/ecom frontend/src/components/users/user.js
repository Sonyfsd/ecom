import { useContext } from 'react';
import userContext from "../../services/user-context.service";

function UserComponent(props) {
    const { triggerUserEvent } = useContext(userContext);
    return (
        <div className="py-2 border-bottom">
            <p>Name: {props.user.name}</p>
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
            <p>City: {props.user.city}</p>
            <p>Phone No: {props.user.phone}</p>
            <button className="btn btn-danger" onClick={() => triggerUserEvent('REMOVE', props.user.id)}>Remove</button>
        </div>
    )
}

export default UserComponent;