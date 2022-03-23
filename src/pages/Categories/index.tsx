import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import * as CategoriesActions from "../../app/store/actions/categoriesActions"

import ModalCategory from "../../components/ModalCategory";
import Header from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, Content, CategoryStyles } from "./styles";

type TCategory = {
    _id: string;
    name: string;
    description: string;
};

type CategoriesProps = {
    categories: TCategory[]
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

    const [allCategories, setAllCategories] = useState<TCategory[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingCategory,
        setUpdatingCategory
    ] = useState<TCategory | undefined>(undefined);
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
        updatingCategory: TCategory | undefined = undefined
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
                        ? categories.map((category: TCategory) => (
                            <Card
                                key={category._id}
                                category={category}
                                toggleModal={toggleModal}
                                deleteData={deleteCategory}
                            />
                        ))
                        : allCategories
                            ? allCategories.map((category: TCategory) => (
                                <div key={category._id}>
                                    <Card
                                        category={category}
                                        toggleModal={toggleModal}
                                        deleteData={deleteCategory}
                                    />
                                </div>
                            ))
                            : (
                                <p>Não há categorias cadastradas!</p>
                            )
                    }
                </CategoryStyles>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(CategoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
