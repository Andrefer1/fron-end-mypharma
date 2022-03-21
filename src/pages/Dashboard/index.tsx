import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FiPlusSquare } from "react-icons/fi";

import ModalProduct from "../../components/ModalProduct";
import * as ProductActions from "../../app/store/actions/productActions"
import { Product as ProductComponent } from "../../components/Product"

import { Container, ProductStyles } from "./styles";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string
    category: string
}

type DashboardProps = {
    products: Product[]
    getProducts: any
    createProduct: any
    updateProduct: any
    deleteProduct: any
}

const Dashboard = ({
    products,
    getProducts,
    deleteProduct
}: DashboardProps) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingProduct,
        setUpdatingProduct
    ] = useState<Product | undefined>(undefined);

    useEffect(() => {
        getProducts()
    }, [getProducts])

    function toggleModal(
        action: string = "",
        updatingProduct: Product | undefined = undefined
    ): void {

        setAction(action)
        setUpdatingProduct(updatingProduct)
        setModalOpen(!modalOpen);
    }

    return (
        <Container>
            <h1>Dashboard</h1>

            <div className='links'>
                <Link to='/categories' className="link"> Categories </Link>
                <Link to='/brands' className="link"> Brands </Link>
            </div>

            <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                <div className="text">Novo Produto</div>
                <div className="icon">
                    <FiPlusSquare size={24} />
                </div>
            </button>

            <ModalProduct
                action={action}
                isOpen={modalOpen}
                updatingProduct={updatingProduct}
                setIsOpen={toggleModal}
            />
            <h2>Produtos</h2>

            <ProductStyles>
                {products.map((product: Product) => (

                    <ProductComponent
                        key={product._id}
                        product={product}
                        toggleModal={toggleModal}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </ProductStyles>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
