import { useState, useEffect } from "react";
import "../../assets/scss/users.scss";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            {/* main-heading */}
            <div className="users-head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>User Listing</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* users grid */}
            <div className="users-grid">
                <div className="container">
                    <div className="row">
                        {users.map(user => (
                            <div key={user.id} className="col-md-4 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-text">{user.email}</p>
                                        <p className="card-text">{user.phone}</p>
                                        <p className="card-text">{user.website}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
