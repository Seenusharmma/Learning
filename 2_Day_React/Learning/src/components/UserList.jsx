// This is The Rendering


function UserList () {
    const users = ["Roshan", "Neha", "Niharika"]

    return(
        <div>
            <h2>Rendering Lists Uisng List</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList ;