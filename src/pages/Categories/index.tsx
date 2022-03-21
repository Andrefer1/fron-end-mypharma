import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import ModalCategory from "../../components/ModalCategory";
import * as CategoriesActions from "../../app/store/actions/categoriesActions"
import { Category as CategoryComponent } from "../../components/Category"

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

    return (
        <Container>
            <h1>Categories</h1>

            <div className='links'>
                <Link to='/' className="link"> Dashboard </Link>
                <Link to='/brands' className="link"> Brands </Link>
            </div>

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
            />

            <CategoryStyles>
                {categories.map((category: Category) => (
                    <CategoryComponent
                        key={category._id}
                        category={category}
                        toggleModal={toggleModal}
                        deleteCategory={deleteCategory}
                    />
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
