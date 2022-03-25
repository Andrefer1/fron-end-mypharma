import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import * as CategoriesActions from "../../app/store/actions/categoriesActions"
import { Category } from "../../app/store/types";
import { ApplicationState } from "../../app/store";

import ModalCategory from "../../components/ModalCategory";
import Header from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, Content, CategoryStyles } from "./styles";

interface StateProps {
    categories: Category[]
}

interface DispatchProps {
    getCategories: () => void
    deleteCategory: (id: string) => void
}

type CategoriesProps = StateProps & DispatchProps

const Categories = ({
    categories,
    getCategories,
    deleteCategory
}: CategoriesProps) => {

    const [allCategories, setAllCategories] = useState<Category[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingCategory,
        setUpdatingCategory
    ] = useState<Category | undefined>(undefined);
    const [session, setSession] = useState<string | void>("")

    const navigate = useNavigate();

    useEffect(() => {
        const isActive = localStorage.getItem("@mypharma/email")

        if (!session && !isActive) {
            return navigate("/auth/login")
        }
    }, [session, navigate])

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
            <Header
                data={categories}
                typeOfData='categorias'
                setData={setAllCategories}
                setSessionIsActive={setSession}
            />

            <Content>
                <section>
                    <h1>Categories</h1>

                    <div className='links'>
                        <Link to='/' className="link"> Produtos </Link>
                        <Link to='/brands' className="link"> Brands </Link>
                    </div>

                    <div>
                        <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                            <div className="text">Nova Categoria</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </section>

                <ModalCategory
                    action={action}
                    isOpen={modalOpen}
                    updatingCategory={updatingCategory}
                    setIsOpen={toggleModal}
                />

                <CategoryStyles>
                    {!allCategories
                        ? categories
                            ? categories.map((category: Category) => (
                                <Card
                                    key={category._id}
                                    category={category}
                                    toggleModal={toggleModal}
                                    deleteData={deleteCategory}
                                />
                            ))
                            : (
                                <p>Não há categorias cadastradas!</p>
                            )
                        : allCategories
                        && allCategories.map((category: Category) => (
                            <div key={category._id}>
                                <Card
                                    category={category}
                                    toggleModal={toggleModal}
                                    deleteData={deleteCategory}
                                />
                            </div>
                        ))

                    }
                </CategoryStyles>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CategoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
