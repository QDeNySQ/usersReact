import React, {Component} from "react";
import {createPortal} from 'react-dom';

const modalApp = document.querySelector('#modal-app');
class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }
    render() {
        return createPortal(
            <div id="myModal" className="modal" onClick={this.props.onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close" onClick={this.props.onClose}>&times;</span>
                    {this.props.children}
                </div>
            </div>
            , modalApp
        );
    }
}
export default Modal;