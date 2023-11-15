import React, { useState } from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

function User({ onEdit, onDelete, user }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditComplete = () => {
        setIsEditing(false);
    };

    return (
        <div className="user">
            <IoCloseCircleSharp onClick={() => onDelete && onDelete(user.id)} className='delete-icon' />
            <IoHammerSharp onClick={() => setIsEditing(!isEditing)} className='edit-icon' />
            <b>ID: {user.id}</b>
            <h3>{user.first_name} {user.last_name}</h3>
            <img src={user.avatar} alt={user.email} />
            <p>Email: {user.email}</p>
            <b>Настрій: {user.isHappy ? 'Щасливий :)' : 'Нещасливий :('}</b>
            {isEditing && (
                <AddUser user={user} onAdd={(editedUser) => {
                    onEdit(editedUser);
                    handleEditComplete();
                }} />)
            }
        </div>
    )
}

export default User;
