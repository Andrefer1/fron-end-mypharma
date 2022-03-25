import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import * as UserActions from "../../app/store/actions/userActions"
import { User } from "../../app/store/types";

import { Container, Content, Form } from "./styles";
import Input from "../../components/Input";

interface DispatchProps {
    createUser: (user: User) => any
}

type RegisterProps = DispatchProps

const Register = ({ createUser }: RegisterProps) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [errorMessagePassword, setErrorMessagePassword] = useState<string | undefined>(undefined)
    const navigate = useNavigate();

    async function handleCreate(user: User) {
        setErrorMessagePassword(undefined)
        setErrorMessage(undefined)

        const payload = await createUser(user)

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
                        icon={FiUser}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Ex.: fulano@provedor.com"
                        icon={FiMail}
                        span={errorMessage}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        icon={FiLock}
                        spanPassword={errorMessagePassword}
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirme sua senha"
                        icon={FiLock}
                        spanPassword={errorMessagePassword}
                    />

                    <button type="submit">Cadastrar</button>
                </Form>

                <Link id='link' to="/auth/login">Login</Link>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(UserActions, dispatch)

export default connect(null, mapDispatchToProps)(Register)
