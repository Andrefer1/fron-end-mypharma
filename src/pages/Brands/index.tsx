import { useEffect, useState } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ModalBrand from "../../components/ModalBrand";
import * as BrandsActions from "../../app/store/actions/brandsActions"
import { FiPlusSquare } from "react-icons/fi";
import { Brand as BrandComponent } from "../../components/Brand"

import { Container, BrandStyles } from "./styles";

type Brand = {
    _id: string;
    name: string;
};

type BrandsProps = {
    brands: Brand[]
    getBrands: any
    deleteBrand: any
}

const Brands = ({
    brands,
    getBrands,
    deleteBrand
}: BrandsProps) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingBrand,
        setUpdatingBrand
    ] = useState<Brand | undefined>(undefined);

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
            <h1>Brands</h1>

            <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                <div className="text">Nova Marca</div>
                <div className="icon">
                    <FiPlusSquare size={24} />
                </div>
            </button>

            <ModalBrand
                action={action}
                isOpen={modalOpen}
                updatingBrand={updatingBrand}
                setIsOpen={toggleModal}
            />

            <BrandStyles>
                {brands.map((brand: Brand) => (
                    <BrandComponent
                        key={brand._id}
                        brand={brand}
                        toggleModal={toggleModal}
                        deleteBrand={deleteBrand}
                    />
                ))}
            </BrandStyles>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    brands: state.brands.brands
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(BrandsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Brands)
