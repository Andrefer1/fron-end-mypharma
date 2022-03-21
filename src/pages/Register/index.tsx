import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { FiPlusSquare } from "react-icons/fi";

import * as UserActions from "../../app/store/actions/userActions"

import { Container, Content, Form } from "./styles";
import Input from "../../components/Input";

type Payload = {
    payload: {
        message: string;
        statusCode: number
    }
}

type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
};

interface RegisterProps {
    user?: User;
    createUser?: any
}


const Register = ({ user, createUser }: RegisterProps) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [errorMessagePassword, setErrorMessagePassword] = useState<string | undefined>(undefined)
    const navigate = useNavigate();

    async function handleCreate(user: User) {
        setErrorMessagePassword(undefined)
        setErrorMessage(undefined)

        const { payload }: Payload = await createUser(user)

        payload.statusCode === 400
            ? setErrorMessagePassword(payload.message)
            : setErrorMessage(payload.message)

        payload?.message === undefined && navigate("/auth/login")
    }

    return (
        <Container>
            <Content>
                <Form onSubmit={handleCreate}>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Ex.: Fulano"
                        icon={FiPlusSquare}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Ex.: fulano@provedor.com"
                        icon={FiPlusSquare}
                        span={errorMessage}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        icon={FiPlusSquare}
                        spanPassword={errorMessagePassword}
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirme sua senha"
                        icon={FiPlusSquare}
                        spanPassword={errorMessagePassword}
                    />

                    <button type="submit">Cadastrar</button>
                </Form>

                <Link to="/auth/login">Login</Link>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(UserActions, dispatch)

export default connect(null, mapDispatchToProps)(Register)
