import React from "react";
import ava from "./img/ava.jpg";
import { toast } from 'react-toastify';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            first_name: props.user ? props.user.first_name : "",
            last_name: props.user ? props.user.last_name : "",
            avatar: props.user ? props.user.avatar : ava,
            email: props.user ? props.user.email : "",
            isHappy: props.user ? props.user.isHappy : false,
        }
    }
    handleAddUser = () => {
        if (!this.state.first_name || !this.state.last_name || !this.state.email) {
            toast.info('Заповніть всі поля!!!', {autoClose: 1500});
            return;
        }
        this.userAdd = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            avatar: this.state.avatar,
            email: this.state.email,
            isHappy: this.state.isHappy,
        };
        if (this.props.user) {
            this.userAdd.id = this.props.user.id;
        }
        this.props.onAdd(this.userAdd);
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={(e) => this.setState({ first_name: e.currentTarget.value })}
                />
                <input
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={(e) => this.setState({ last_name: e.currentTarget.value })}
                />
                <input
                    type="file"
                    onChange={(e) => this.setState({ avatar: e.target.files[0] })}
                />
                <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.currentTarget.value })}
                />
                <label htmlFor="isHappy">You Happy?</label>
                <input
                    type="checkbox"
                    id="isHappy"
                    checked={this.state.isHappy}
                    onChange={(e) => this.setState({ isHappy: e.currentTarget.checked })}
                />
                <button type="button" onClick={this.handleAddUser}>Done</button>
            </form>
        )
    }
}

export default AddUser;
