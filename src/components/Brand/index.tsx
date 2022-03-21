import { Container } from "./styles";

type TBrand = {
    _id: string;
    name: string;
}

interface IBrandsProps {
    brand: TBrand
    toggleModal: (action: string, brand: TBrand) => void
    deleteBrand: (_id: string) => void
}

export function Brand({ brand, toggleModal, deleteBrand }: IBrandsProps) {

    const { _id, name } = brand

    return (
        <Container>
            <h3>{name}</h3>

            <div className='buttons'>
                <button
                    onClick={() => toggleModal("Editar", brand)}
                >
                    Editar
                </button>
                <button
                    onClick={() => deleteBrand(_id)}
                >
                    Excluir
                </button>
            </div>
        </Container>
    )
}