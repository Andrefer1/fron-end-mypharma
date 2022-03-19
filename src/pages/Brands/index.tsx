import { useEffect, useState } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ModalBrand } from "../../components/ModalBrand";
import * as BrandsActions from "../../app/store/actions/brandsActions"
import { FiPlusSquare } from "react-icons/fi";

import { Container, BrandStyles } from "./styles";

type Brand = {
    _id: string;
    name: string;
};

type BrandsProps = {
    brands: Brand[]
    getBrands: any
    createBrand: any
    updateBrand: any
    deleteBrand: any
}

const Brands = ({
    brands,
    getBrands,
    createBrand,
    updateBrand,
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

    async function handleCreateBrand(brand: Brand) {
        return createBrand(brand)
    }

    async function handleUpdateBrand(brand: Brand) {
        return updateBrand(brand)
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
                handleCreateBrand={handleCreateBrand}
                handleUpdateBrand={handleUpdateBrand}
            />

            <BrandStyles>
                {brands.map((brand: Brand) => (
                    <div key={brand._id}>
                        <h3>{brand.name}</h3>

                        <div className='buttons'>
                            <button
                                onClick={() => toggleModal("Editar", brand)}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => deleteBrand(brand._id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
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
