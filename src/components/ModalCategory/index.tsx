import { useState } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    FiCheckSquare,
    FiEdit2,
    FiAlignJustify,
} from "react-icons/fi";

import * as CategoryActions from "../../app/store/actions/categoriesActions"
import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface Category {
    _id: string;
    name: string;
    description: string;
}

type Payload = {
    payload: {
        message: string;
        statusCode: number
    }
}

interface ModalCategoryProps {
    createCategory?: any
    updateCategory?: any
    action: string
    updatingCategory: Category | undefined
    isOpen: boolean;
    setIsOpen: () => void;
}

const ModalCategory = ({
    createCategory,
    updateCategory,
    action,
    isOpen,
    updatingCategory = undefined,
    setIsOpen,
}: ModalCategoryProps) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

    async function handleSubmit(category: Category) {

        if (updatingCategory) {
            const { payload }: Payload = await handleUpdateCategory({ ...category, _id: updatingCategory._id });

            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        } else {
            const { payload }: Payload = await handleCreateCategory(category);

            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        }
    }

    function handleCreateCategory(category: Category) {
        return createCategory(category)
    }

    function handleUpdateCategory(category: Category) {
        return updateCategory(category)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingCategory}>
                <h1>{`${action}`} Categoria</h1>

                <Input
                    name="name" icon={FiEdit2}
                    placeholder="Nome da categoria"
                    span={errorMessage}
                />

                <Input
                    name="description"
                    icon={FiAlignJustify}
                    placeholder="Descrição da categoria"
                />

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

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(CategoryActions, dispatch)

export default connect(null, mapDispatchToProps)(ModalCategory)