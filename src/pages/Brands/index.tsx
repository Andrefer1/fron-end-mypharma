import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import * as BrandsActions from "../../app/store/actions/brandsActions"

import ModalBrand from "../../components/ModalBrand";
import Header from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, Content, BrandStyles } from "./styles";

type TBrand = {
    _id: string;
    name: string;
};

type BrandsProps = {
    brands: TBrand[]
    getBrands: any
    deleteBrand: any
}

const Brands = ({
    brands,
    getBrands,
    deleteBrand
}: BrandsProps) => {

    const [allBrands, setAllBrands] = useState<TBrand[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingBrand,
        setUpdatingBrand
    ] = useState<TBrand | undefined>(undefined);
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
        updatingBrand: TBrand | undefined = undefined
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
                setData={setAllBrands}
                setSessionIsActive={setSession}
            />

            <Content>
                <section>
                    <h1>Brands</h1>

                    <div className='links'>
                        <Link to='/' className="link"> Dashboard </Link>
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
                    {!allBrands
                        ? brands.map((brand: TBrand) => (
                            <Card
                                key={brand._id}
                                brand={brand}
                                toggleModal={toggleModal}
                                deleteData={deleteBrand}
                            />
                        ))
                        : allBrands
                            ? allBrands.map((brand: TBrand) => (
                                <div key={brand._id}>
                                    <Card
                                        brand={brand}
                                        toggleModal={toggleModal}
                                        deleteData={deleteBrand}
                                    />
                                </div>
                            ))
                            : (
                                <p>Não há marcas cadastradas!</p>
                            )
                    }
                </BrandStyles>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    brands: state.brands.brands
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(BrandsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Brands)
