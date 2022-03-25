import { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
    FiCheckSquare,
    FiEdit2,
} from "react-icons/fi";

import * as BrandActions from "../../app/store/actions/brandsActions"
import { Brand } from "../../app/store/types";

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface ModalBrandProps {
    createBrand: (brand: Brand) => any
    updateBrand: (brand: Brand) => any
    action: string
    updatingBrand: Brand | undefined
    isOpen: boolean;
    setIsOpen: () => void;
}

const ModalBrand = ({
    createBrand,
    updateBrand,
    action,
    isOpen,
    updatingBrand = undefined,
    setIsOpen,
}: ModalBrandProps) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

    async function handleSubmit(brand: Brand) {

        if (updatingBrand) {
            const { payload } = await updateBrand({ ...brand, _id: updatingBrand._id });
            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        } else {
            const { payload } = await createBrand(brand);

            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        }
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingBrand}>
                <h1>{`${action}`} Marca</h1>

                <Input
                    name="name"
                    icon={FiEdit2}
                    placeholder="Nome da marca"
                    span={errorMessage}
                />

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

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(BrandActions, dispatch)

export default connect(null, mapDispatchToProps)(ModalBrand)