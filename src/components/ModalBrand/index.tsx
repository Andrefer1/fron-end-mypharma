import {
    FiCheckSquare,
    FiEdit2,
} from "react-icons/fi";

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface Brand {
    _id: string;
    name: string;
}

interface ModalBrandProps {
    action: string
    updatingBrand: Brand | undefined
    isOpen: boolean;
    setIsOpen: () => void;
    handleCreateBrand: (brand: Brand) => void;
    handleUpdateBrand: (brand: Brand) => void;
}

export function ModalBrand({
    action,
    isOpen,
    updatingBrand = undefined,
    setIsOpen,
    handleCreateBrand,
    handleUpdateBrand,
}: ModalBrandProps) {
    async function handleSubmit(brand: Brand) {

        if (updatingBrand) {
            handleUpdateBrand({ ...brand, _id: updatingBrand._id });
        } else {
            handleCreateBrand(brand);
        }

        setIsOpen();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingBrand}>
                <h1>{`${action}`} Marca</h1>

                <Input name="name" icon={FiEdit2} placeholder="Nome da marca" />

                <button type="submit" data-testid={`${action}-brand-button`}>
                    <p className="text">{`${action}`}</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal >
    );
}