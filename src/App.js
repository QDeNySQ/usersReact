import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";
import Modal from "./components/Modal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = "https://reqres.in/api/users?page=1";

function App() {
    const [users, setUsers] = useState(() => {
        const storedUsers = JSON.parse(window.localStorage.getItem('users'));
        return storedUsers || [];
    });
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        if (users.length === 0) {
            axios.get(baseUrl).then((res) => {
                setUsers(res.data.data);
            });
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    }

    const deleteUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }

    const editUser = (user) => {
        setUsers((prevUsers) => {
            return prevUsers.map((prevUser) =>
                prevUser.id === user.id ? user : prevUser
            );
        });
    }

    const addUser = (user) => {
        const id = users.length + 1;
        setUsers([...users, {id,...user}]);
    }

    return (
        <div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <h3>Список користувачів</h3>
                    <p>Увага!!! Всі користувачі є вигадані і не являються реальными персонами!</p>
                </Modal>
            )}
            <Header title='Cписок користувачів' />
            <main>
                <Users users={users} onEdit={editUser} onDelete={deleteUser} />
            </main>
            <aside>
                <AddUser onAdd={addUser} />
            </aside>
            <ToastContainer />
        </div>
    );
}

export default App;