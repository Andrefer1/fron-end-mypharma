import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { FiPlusSquare } from "react-icons/fi";

import * as ProductActions from "../../app/store/actions/productActions"
import { Product } from "../../app/store/types";
import { ApplicationState } from "../../app/store";

import ModalProduct from "../../components/ModalProduct";
import Header from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, Content, ProductStyles } from "./styles";

interface StateProps {
    products: Product[]
}

interface DispatchProps {
    getProducts: () => void
    deleteProduct: (id: string) => void
}

type DashboardProps = StateProps & DispatchProps

const Dashboard = ({
    products,
    getProducts,
    deleteProduct
}: DashboardProps) => {

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [createOrUpdate, setCreateOrUpdate] = useState<string>("");
    const [
        updatingProduct,
        setUpdatingProduct
    ] = useState<Product | undefined>(undefined);
    const [session, setSession] = useState<string | undefined>("")

    const navigate = useNavigate();

    useEffect(() => {
        const isActive = localStorage.getItem("@mypharma/email")

        if (!session && !isActive) {
            setSession("")
            return navigate("/auth/login")
        }
    }, [session, navigate])

    useEffect(() => {
        getProducts()
    }, [getProducts])

    function toggleModal(
        action: string = "",
        updatingProduct: Product | undefined = undefined
    ): void {

        setCreateOrUpdate(action)
        setUpdatingProduct(updatingProduct)
        setModalOpen(!modalOpen);
    }

    return (
        <Container>
            <Header
                data={products}
                typeOfData='produtos'
                setData={setAllProducts}
                setSessionIsActive={setSession}
            />

            <Content>
                <section>
                    <h1>Produtos</h1>

                    <div className='links'>
                        <Link to='/categories' className="link"> Categories </Link>
                        <Link to='/brands' className="link"> Brands </Link>
                    </div>

                    <div>
                        <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                            <div className="text">Novo Produto</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </section>


                <ModalProduct
                    createOrUpdate={createOrUpdate}
                    isOpen={modalOpen}
                    updatingProduct={updatingProduct}
                    setIsOpen={toggleModal}
                />

                <ProductStyles>
                    {!allProducts
                        ? products
                            ? products.map((product: Product) => (
                                <div key={product._id}>
                                    <Card
                                        product={product}
                                        toggleModal={toggleModal}
                                        deleteData={deleteProduct}
                                    />
                                </div>
                            ))
                            : (
                                <p>Não há produtos cadastrados!</p>
                            )
                        : allProducts
                        && allProducts.map((product: Product) => (
                            <div key={product._id}>
                                <Card
                                    product={product}
                                    toggleModal={toggleModal}
                                    deleteData={deleteProduct}
                                />
                            </div>
                        ))

                    }
                </ProductStyles>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
