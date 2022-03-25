import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import * as BrandsActions from "../../app/store/actions/brandsActions"
import { Brand } from "../../app/store/types";
import { ApplicationState } from "../../app/store";

import ModalBrand from "../../components/ModalBrand";
import Header from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, Content, BrandStyles } from "./styles";

interface StateProps {
    brands: Brand[]
}

interface DispatchProps {
    getBrands: () => void
    deleteBrand: (id: string) => void
}

type BrandsProps = StateProps & DispatchProps

const Brands = ({
    brands,
    getBrands,
    deleteBrand
}: BrandsProps) => {

    const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingBrand,
        setUpdatingBrand
    ] = useState<Brand | undefined>(undefined);
    const [session, setSession] = useState<string | void>("")

    const navigate = useNavigate();

    useEffect(() => {
        const isActive = localStorage.getItem("@mypharma/email")

        if (!session && !isActive) {
            return navigate("/auth/login")
        }
    }, [session, navigate])


    useEffect(() => {
        getBrands()
    }, [getBrands])

    function toggleModal(
        action: string = "",
        updatingBrand: Brand | undefined = undefined
    ): void {

        setAction(action)
        setUpdatingBrand(updatingBrand)
        setModalOpen(!modalOpen);
    }

    return (
        <Container>
            <Header
                data={brands}
                typeOfData='marcas'
                setData={setFilteredBrands}
                setSessionIsActive={setSession}
            />

            <Content>
                <section>
                    <h1>Brands</h1>

                    <div className='links'>
                        <Link to='/' className="link"> Produtos </Link>
                        <Link to='/categories' className="link"> Categories </Link>
                    </div>

                    <div>
                        <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                            <div className="text">Nova Marca</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </section>

                <ModalBrand
                    action={action}
                    isOpen={modalOpen}
                    updatingBrand={updatingBrand}
                    setIsOpen={toggleModal}
                />

                <BrandStyles>
                    {!filteredBrands
                        ? brands
                            ? brands.map((brand: Brand) => (
                                <Card
                                    key={brand._id}
                                    brand={brand}
                                    toggleModal={toggleModal}
                                    deleteData={deleteBrand}
                                />
                            ))
                            : (
                                <p>Não há marcas cadastradas!</p>
                            )
                        : filteredBrands
                        && filteredBrands.map((brand: Brand) => (
                            <div key={brand._id}>
                                <Card
                                    brand={brand}
                                    toggleModal={toggleModal}
                                    deleteData={deleteBrand}
                                />
                            </div>
                        ))
                    }
                </BrandStyles>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    brands: state.brands.brands
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(BrandsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Brands)
