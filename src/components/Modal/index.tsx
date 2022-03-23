import { ReactNode, useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        if (modalStatus !== isOpen) {
            setModalStatus(isOpen);
        }
    }, [isOpen, modalStatus]);

    return (
        <ReactModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={setIsOpen}
            isOpen={modalStatus}
            ariaHideApp={false}
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    background: "var(--grey-50)",
                    color: "var(--black)",
                    borderRadius: "8px",
                    maxWidth: "736px",
                    width: "80%",
                    border: "none",
                },
                overlay: {
                    backgroundColor: "var(--grey-950)",
                },
            }}
        >
            {children}
        </ReactModal>
    );
}