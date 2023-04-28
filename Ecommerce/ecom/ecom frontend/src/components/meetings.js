function MeetingsComponent() {
    const meetings = [
        {
            type: 'recurring',
            name: 'React JS - 7 AM',
            id: '943 7449 3911',
        },
        {
            type: 'recurring',
            name: 'Angular - 8 AM',
            id: '943 7449 3912',
        },
        {
            type: 'recurring',
            name: 'React JS - 7 AM',
            id: '943 7449 3911',
        },
        {
            type: 'recurring',
            name: 'Angular - 8 AM',
            id: '943 7449 3912',
        },
        {
            type: 'recurring',
            name: 'React JS - 7 AM',
            id: '943 7449 3911',
        },
        {
            type: 'recurring',
            name: 'Angular - 8 AM',
            id: '943 7449 3912',
        }
    ];
    return (
        <div>
            <h3>My Meetings</h3>
            {meetings.map((value, index) => (
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                    <div>
                        <h4>{value.type}</h4>
                    </div>
                    <div>
                        <h4>{value.name}</h4>
                        <p>Meeting Id: <span>{value.id}</span></p>
                    </div>
                    <div>
                        <button>Start</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default MeetingsComponent;