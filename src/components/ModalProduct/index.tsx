import { useEffect, useState } from "react";
import { ApiResponse } from "apisauce";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    FiCheckSquare,
    FiEdit2,
    FiAlignJustify,
    FiTag,
    FiGlobe,
    FiBox,
    FiDatabase
} from "react-icons/fi";

import * as ProductActions from "../../app/store/actions/productActions"
import Modal from "../Modal";
import Input from "../Input";
import SelectInput from "../SelectInput";
import { api } from "../../services/api";

import { Form } from "./styles";

type Brand = {
    _id: string;
    name: string;
};

type Category = {
    _id: string;
    name: string;
    description: string;
};

type Payload = {
    payload: {
        message: string;
        statusCode: number
    }
}

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
    createProduct?: any;
    updateProduct?: any
    action: string
    updatingProduct: Product | undefined
    isOpen: boolean;
    setIsOpen: () => void;
}

const ModalProduct = ({
    createProduct,
    updateProduct,
    action,
    isOpen,
    updatingProduct = undefined,
    setIsOpen,
}: ModalProductProps) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [brands, setBrands] = useState<Brand[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        (async () => {
            Promise.all([
                api.get('/brands').then(
                    (brand: ApiResponse<any>) => setBrands(brand.data)
                ),
                api.get('/categories').then(
                    (category: ApiResponse<any>) => setCategories(category.data)
                )
            ])
        })()
    }, [])

    async function handleSubmit(product: Product) {

        if (updatingProduct) {
            const { payload }: Payload = await handleUpdateProduct({ ...product, _id: updatingProduct._id });
            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        } else {
            const { payload }: Payload = await handleCreateProduct(product)
            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        }
    }

    function handleCreateProduct(Product: Product) {
        return createProduct(Product)
    }

    function handleUpdateProduct(Product: Product) {
        return updateProduct(Product)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingProduct}>
                <h1>{`${action}`} Produto</h1>

                <Input
                    name="name"
                    icon={FiEdit2}
                    placeholder="Nome do produto"
                    span={errorMessage}
                />
                <Input
                    name="description"
                    icon={FiAlignJustify}
                    placeholder="Descrição do produto"
                />
                <Input
                    name="price"
                    icon={FiTag}
                    placeholder="Preço do produto"
                />
                <Input
                    name="stock"
                    icon={FiDatabase}
                    placeholder="Estoque disponível do produto"
                />

                <SelectInput
                    name='category'
                    icon={FiBox}
                    brandsOrCategories={categories}
                    nameDataBeingUpdated={updatingProduct?.category}
                />

                <SelectInput
                    name='brand'
                    icon={FiGlobe}
                    brandsOrCategories={brands}
                    nameDataBeingUpdated={updatingProduct?.brand}
                />

                <button
                    type="submit"
                    data-testid={`${action}-product-button`}
                >
                    <p className="text">{`${action}`}</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form >
        </Modal >
    );
}

const mapStateToProps = (state: any) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct)