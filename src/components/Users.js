import React, { useEffect } from "react";
import User from "./User";

function Users(props) {
    const { users, onEdit, onDelete } = props;

    useEffect(() => {
        const previousUsers = JSON.parse(window.localStorage.getItem('users'));
        if (JSON.stringify(previousUsers) !== JSON.stringify(users)) {
            window.localStorage.setItem('users', JSON.stringify(users));
        }
    }, [users]);

    return (
        <div>
            {Array.isArray(users) && users.length > 0 ? (
                users.map((el) => (
                    <User onEdit={(editedUser) => onEdit(editedUser)} onDelete={onDelete} user={el} key={el.id} />
                ))
            ) : (
                <div className="user">
                    <h3>НЕМАЄ КОРИСТУВАЧІВ!!!</h3>
                </div>
            )}
        </div>
    );
}

export default Users;
