import {
    FiCheckSquare,
    FiEdit2,
    FiAlignJustify,
    FiTag,
    FiGlobe,
    FiBox,
    FiDatabase
} from "react-icons/fi";

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string
    category: string
}

interface ModalProductProps {
    action: string
    updatingProduct: Product | undefined
    isOpen: boolean;
    setIsOpen: () => void;
    handleCreateProduct: (product: Product) => void;
    handleUpdateProduct: (product: Product) => void;
}

export function ModalProduct({
    action,
    isOpen,
    updatingProduct = undefined,
    setIsOpen,
    handleCreateProduct,
    handleUpdateProduct,
}: ModalProductProps) {

    async function handleSubmit(product: Product) {
        if (updatingProduct) {
            handleUpdateProduct({ ...product, _id: updatingProduct._id });
        } else {
            handleCreateProduct(product);
        }

        setIsOpen();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingProduct}>
                <h1>{`${action}`} Produto</h1>

                <Input name="name" icon={FiEdit2} placeholder="Nome do produto" required={true} />
                <Input name="description" icon={FiAlignJustify} placeholder="Descrição do produto" required={true} />
                <Input name="price" icon={FiTag} placeholder="Preço do produto" required={true} />
                <Input name="stock" icon={FiDatabase} placeholder="Estoque disponível do produto" required={true} />
                <Input name="category" icon={FiBox} placeholder="Categoria do produto" required={true} />
                <Input name="brand" icon={FiGlobe} placeholder="Marca do produto" required={true} />

                <button type="submit" data-testid={`${action}-product-button`}>
                    <p className="text">{`${action}`}</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal >
    );
}