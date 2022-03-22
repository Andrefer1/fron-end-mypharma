import { Container } from "./styles";

type TBrand = {
    _id: string;
    name: string;
}

type TCategory = {
    _id: string;
    name: string;
    description: string;
}

type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string
    category: string
}

interface CardProps {
    brand?: TBrand;
    category?: TCategory;
    product?: TProduct;
    toggleModal: (
        action: string,
        data: any//TBrand | TCategory | TProduct
    ) => void
    deleteData: (_id: string) => void
}

export function Card({
    brand,
    category,
    product,
    toggleModal,
    deleteData
}: CardProps) {

    const Buttons = ({ data }: any) => (
        <div className='buttons'>
            <button
                onClick={() => toggleModal("Editar", data)}
            >
                Editar
            </button>
            <button
                onClick={() => deleteData(data._id)}
            >
                Excluir
            </button>
        </div>
    )

    if (brand) {
        return (
            <Container>
                <h3>{brand.name}</h3>

                <Buttons data={brand} />
            </Container>
        )
    }

    else if (category) {
        return (
            <Container>
                <h3>{category.name}</h3>

                <div className='content'>
                    <p>{category.description}</p>
                </div>

                <Buttons data={category} />
            </Container>
        )
    }

    else if (product) {
        return (
            <Container>
                <h3>{product.name}</h3>

                <div className='content'>
                    <p>{product.description}</p>

                    <div>{product.price}</div>
                    <div>{product.stock}</div>
                    <div>{product.category}</div>
                    <div>{product.brand}</div>
                </div>


                <Buttons data={product} />
            </Container>
        )
    }

    return <></>
}