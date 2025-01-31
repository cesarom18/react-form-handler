import { useEffect, useState } from "react";
import {
    UserForm,
    UserFormState
} from "./components/UserForm";

type User = UserFormState & { id: number };

export const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="hero is-fullheight">
            <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                <h1 className="title">Simple User Form</h1>
                <div className="table-container">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <th>{user.id}</th>
                                        <th>{user.name}</th>
                                        <th>{user.username}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <hr className="is-fullwidth" />
                <UserForm handleSubmit={user => setUsers([...users, { ...user, id: users.length + 1 }])} />
            </div>
        </div>
    )
}