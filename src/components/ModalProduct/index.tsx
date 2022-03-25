import { useEffect, useState } from "react";
import { ApiResponse } from "apisauce";
import { bindActionCreators, Dispatch } from 'redux'
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
import { Brand, Category, Product } from "../../app/store/types";
import { ApplicationState } from "../../app/store";

import Modal from "../Modal";
import Input from "../Input";
import SelectInput from "../SelectInput";
import { api } from "../../services/api";

import { Form } from "./styles";

interface ModalProductProps {
    createProduct: (product: Product) => any;
    updateProduct: (product: Product) => any;
    createOrUpdate: string
    updatingProduct: Product | undefined
    isOpen: boolean;
    setIsOpen: () => void;
}

const ModalProduct = ({
    createProduct,
    updateProduct,
    createOrUpdate,
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
            const { payload } = await updateProduct({
                ...product,
                _id: updatingProduct._id
            });

            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        } else {
            const { payload } = await createProduct(product)
            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        }
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form onSubmit={handleSubmit} initialData={updatingProduct}>
                <h1>{`${createOrUpdate}`} Produto</h1>

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
                    data-testid={`${createOrUpdate}-product-button`}
                >
                    <p className="text">{`${createOrUpdate}`}</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form >
        </Modal >
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct)