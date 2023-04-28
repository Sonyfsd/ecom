import React, { useState } from 'react';
import UserContext from '../../services/user-context.service';
import UserListComponent from './userList';
import AddUserComponent from './addUser';

function UsersComponent() {
    const [users, setUsers] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "city": "Gwenborough",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "city": "Wisokyburgh",
            "phone": "010-692-6593 x09125",
        },
        {
            "id": 3,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "city": "Gwenborough",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 4,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "city": "Wisokyburgh",
            "phone": "010-692-6593 x09125",
        },
        {
            "id": 5,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "city": "Gwenborough",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 6,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "city": "Wisokyburgh",
            "phone": "010-692-6593 x09125",
        }
    ]);
    const triggerUserEvent = (type, payload) => {
        console.log(payload);
        if (type === 'ADD_USER') {
            setUsers([...users, {id: users.length + 1, ...payload}]);
        } else {
            setUsers([...users.filter(user => user.id !== payload)]);
        }
    }
    return (
        <div className='container my-5'>
            <div className='row'>
                <UserContext.Provider value={{users, triggerUserEvent}}>
                    <UserListComponent />
                    <AddUserComponent />
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default UsersComponent;