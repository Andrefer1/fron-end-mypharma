import { useEffect, useState } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import { ModalCategory } from "../../components/ModalCategory";
import * as CategoriesActions from "../../app/store/actions/categoriesActions"

import { Container, CategoryStyles } from "./styles";

type Category = {
    _id: string;
    name: string;
    description: string;
};

type CategoriesProps = {
    categories: Category[]
    getCategories: any
    createCategory: any
    updateCategory: any
    deleteCategory: any
}

const Categories = ({
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}: CategoriesProps) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingCategory,
        setUpdatingCategory
    ] = useState<Category | undefined>(undefined);

    useEffect(() => {
        getCategories()
    }, [getCategories])

    function toggleModal(
        action: string = "",
        updatingCategory: Category | undefined = undefined
    ): void {

        setAction(action)
        setUpdatingCategory(updatingCategory)
        setModalOpen(!modalOpen);
    }

    async function handleCreateCategory(category: Category) {
        return createCategory(category)
    }

    async function handleUpdateCategory(category: Category) {
        return updateCategory(category)
    }

    return (
        <Container>
            <h1>Categories</h1>

            <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                <div className="text">Nova Categoria</div>
                <div className="icon">
                    <FiPlusSquare size={24} />
                </div>
            </button>

            <ModalCategory
                action={action}
                isOpen={modalOpen}
                updatingCategory={updatingCategory}
                setIsOpen={toggleModal}
                handleCreateCategory={handleCreateCategory}
                handleUpdateCategory={handleUpdateCategory}
            />

            <CategoryStyles>
                {categories && categories.map((category: Category) => (
                    <div key={category._id}>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>

                        <div className='buttons'>
                            <button
                                onClick={() => toggleModal("Editar", category)}

                            >
                                Editar
                            </button>
                            <button
                                onClick={() => deleteCategory(category._id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </CategoryStyles>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(CategoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
