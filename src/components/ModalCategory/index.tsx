import {
    FiCheckSquare,
    FiEdit2,
    FiAlignJustify,
} from "react-icons/fi";

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface Category {
    _id: string;
    name: string;
    description: string;
}

interface ModalCategoryProps {
    action: string
    updatingCategory: Category | undefined
    isOpen: boolean;
    setIsOpen: () => void;
    handleCreateCategory: (category: Category) => void;
    handleUpdateCategory: (category: Category) => void;
}

export function ModalCategory({
    action,
    isOpen,
    updatingCategory = undefined,
    setIsOpen,
    handleCreateCategory,
    handleUpdateCategory,
}: ModalCategoryProps) {
    async function handleSubmit(category: Category) {

        if (updatingCategory) {
            handleUpdateCategory({ ...category, _id: updatingCategory._id });
        } else {
            handleCreateCategory(category);
        }

        setIsOpen();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingCategory}>
                <h1>{`${action}`} Categoria</h1>

                <Input name="name" icon={FiEdit2} placeholder="Nome da categoria" />

                <Input name="description" icon={FiAlignJustify} placeholder="Descrição da categoria" />

                <button type="submit" data-testid={`${action}-category-button`}>
                    <p className="text">{`${action}`}</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal >
    );
}