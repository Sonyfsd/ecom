import { useReducer, useState } from "react";
function todoReducer(state, action) {
    if (action.type === 'ADD') {
        return [...state, {id: state.length + 1, taskName: action.taskName, isCompleted: false}];
    } else if (action.type === 'REMOVE') {
        return state.filter(todo => todo.id !== action.id);
    } else {
        const updated = state.map(todo => {
            if (todo.id === action.id) {
                return {...todo, isCompleted: !todo.isCompleted};
            } else {
                return todo;
            }
        });
        console.log(updated);
        return updated;
    }
}
function TodoListComponent() {
    const [taskName, setTaskName] = useState('');
    const [state, dispatch] = useReducer(todoReducer, [{id: 1, taskName: 'Taking Class at 7 AM', isCompleted: false}])
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="my-3 text-center">Todo List</h2>
                    {state.map(todo => (
                        <div className="row border-bottom my-2 py-2">
                            <div className="col-sm">
                                <h5 style={{'textDecoration': todo.isCompleted ? 'line-through' : 'none'}}>{todo.taskName}</h5>
                                <button className="btn btn-success me-2" onClick={() => dispatch({type: 'TOGGLE', id: todo.id})}>{todo.isCompleted ? 'In complete' : 'Complete'}</button>
                                <button className="btn btn-danger my-2" onClick={() => {dispatch({type: 'REMOVE', id: todo.id});}}>Remove</button>
                            </div>
                        </div>  
                    ))}
                </div>
                <div className="col-sm">
                    <h2 className="my-3">Add Todo</h2>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Task Name</label>
                        <input type="text" className="form-control" value={taskName} id="exampleFormControlInput1" onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" />
                        <button className="btn btn-primary my-2" onClick={() => {dispatch({type: 'ADD', taskName: taskName}); setTaskName('')}}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListComponent;