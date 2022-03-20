import { useEffect, useState } from "react";
// import { ApiResponse } from "apisauce";
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
// import { api } from "../../services/api";

import { Form } from "./styles";

// type Brand = {
//     _id: string;
//     name: string;
// };

// type Category = {
//     _id: string;
//     name: string;
//     description: string;
// };

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
    action: string
    updatingProduct: Product | undefined
    isOpen: boolean;
    setIsOpen: () => void;
    // handleCreateProduct: (product: Product) => void;
    handleUpdateProduct: (product: Product) => void;
}

const ModalProduct = ({
    createProduct,
    action,
    isOpen,
    updatingProduct = undefined,
    setIsOpen,
    // handleCreateProduct,
    handleUpdateProduct,
}: ModalProductProps) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    // const [brands, setBrands] = useState<Brand[]>([])
    // const [categories, setCategories] = useState<Category[]>([])

    // useEffect(() => {
    //     (async () => {
    //         await api.get('/brands').then(
    //             (brand: ApiResponse<any>) => setBrands(brand.data)
    //         )
    //         await api.get('/categories').then(
    //             (category: ApiResponse<any>) => setCategories(category.data)
    //         )

    //     })()
    // }, [])


    async function handleSubmit(product: Product) {
        console.log(product)

        if (updatingProduct) {
            handleUpdateProduct({ ...product, _id: updatingProduct._id });
        } else {
            const { payload }: Payload = await handleCreateProduct(product)

            setErrorMessage(payload?.message)

            payload?.message === undefined && setIsOpen()
        }
    }

    async function handleCreateProduct(Product: Product) {
        return createProduct(Product)
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
                    typ='number'
                    icon={FiTag}
                    placeholder="Preço do produto"
                />
                <Input
                    name="stock"
                    typ='number'
                    icon={FiDatabase}
                    placeholder="Estoque disponível do produto"
                />
                <Input
                    name="category"
                    icon={FiBox}
                    placeholder="Categoria do produto"
                />
                <Input
                    name="brand"
                    icon={FiGlobe}
                    placeholder="Marca do produto"
                />

                {/* <div className="selects">
                    <div>
                        <FiBox size={24} />
                        <select name='price'>
                            <option value={updatingProduct?.category}> Selecione uma categoria </option>
                            {categories.map((category: Brand) => (
                                <option
                                    value={category.name}
                                    selected={category.name === updatingProduct?.category ? true : false}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <FiGlobe size={24} />
                        <select name='category'>
                            <option value={updatingProduct?.brand}> Selecione uma categoria </option>
                            {brands.map((brand: Brand) => (
                                <option
                                    value={brand.name}
                                    selected={brand.name === updatingProduct?.brand ? true : false}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div> */}

                <button
                    type="submit"
                // data-testid={`${action}-product-button`}
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