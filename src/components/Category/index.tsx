import { Container } from "./styles";

type TCategory = {
    _id: string;
    name: string;
    description: string;
}

interface ICategorysProps {
    category: TCategory
    toggleModal: (action: string, category: TCategory) => void
    deleteCategory: (_id: string) => void
}

export function Category({ category, toggleModal, deleteCategory }: ICategorysProps) {

    const { _id, name, description } = category

    return (
        <Container>
            <h3>{name}</h3>

            <p>{description}</p>

            <div className='buttons'>
                <button
                    onClick={() => toggleModal("Editar", category)}
                >
                    Editar
                </button>
                <button
                    onClick={() => deleteCategory(_id)}
                >
                    Excluir
                </button>
            </div>
        </Container>
    )
}