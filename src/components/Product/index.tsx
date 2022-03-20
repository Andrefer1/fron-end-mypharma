import { Container } from "./styles";

type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string
    category: string
    message?: string;

}

interface IProductsProps {
    product: TProduct
    toggleModal: (action: string, product: TProduct) => void
    deleteProduct: (_id: string) => void
}

export function Product({ product, toggleModal, deleteProduct }: IProductsProps) {

    const { _id, name, description, price, stock, brand, category } = product

    function currencyConverter(price: number): string {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    return (
        <Container>
            <h3>{name}</h3>

            <p>{description}</p>
            <div>{currencyConverter(price)}</div>
            <div>{stock}</div>
            <div>{category}</div>
            <div>{brand}</div>

            <div className='buttons'>
                <button
                    onClick={() => toggleModal("Editar", product)}
                >
                    Editar
                </button>
                <button
                    onClick={() => deleteProduct(_id)}
                >
                    Excluir
                </button>
            </div>
        </Container>
    )
}