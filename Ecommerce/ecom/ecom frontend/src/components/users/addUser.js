import { useContext, useState } from "react";
import userContext from "../../services/user-context.service";
function AddUserComponent() {
    const [name, setName] = useState(null);
    const [username, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [phone, setPhone] = useState(null);

    const { triggerUserEvent } = useContext(userContext);
    const addUser = () => {
        triggerUserEvent('ADD_USER', {name, username, email, city, phone});
        window.alert('Added user successfully');
        setName(null);
        setUserName(null);
        setEmail(null);
        setCity(null);
        setPhone(null);
    };
    return (
        <div className="col-sm">
            <h2>Add User</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" value={name} id="exampleFormControlInput1" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" value={username} id="exampleFormControlInput1" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" value={email} id="exampleFormControlInput1" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">City</label>
                <input type="text" class="form-control" value={city} id="exampleFormControlInput1" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                <input type="number" class="form-control"value={phone} id="exampleFormControlInput1" placeholder="Phone No" onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={addUser}>Add User</button>
        </div>
    )
}

export default AddUserComponent;