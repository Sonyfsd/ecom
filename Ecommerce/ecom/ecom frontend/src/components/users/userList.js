import { useContext } from 'react';
import userContext from "../../services/user-context.service";
import UserComponent from './user';
function UserListComponent() {
    const { users }  = useContext(userContext);
    return (
        <div className="col-sm">
            <h2>Users List</h2>
            {users.map(user => (<UserComponent user={user}/>))}
        </div>
    )
}

export default UserListComponent;