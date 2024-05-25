import './Modal.css';

const Modal = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;