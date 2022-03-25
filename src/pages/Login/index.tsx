import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import { FiMail, FiLock } from "react-icons/fi";

import * as UserActions from "../../app/store/actions/userActions"
import { User } from "../../app/store/types";
import { ApplicationState } from "../../app/store";

import Input from "../../components/Input";

import { Container, Content, Form } from "./styles";

interface DispatchProps {
    getUser: (user: User) => any
}

type UserProps = & DispatchProps

const Login = ({ getUser }: UserProps) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [errorMessagePassword, setErrorMessagePassword] = useState<string | undefined>(undefined)
    const navigate = useNavigate();

    function saveSession({ name, email, password }: Pick<User, "name" | "email" | "password">) {
        localStorage.setItem("@mypharma/name", name)
        localStorage.setItem("@mypharma/email", email)
        localStorage.setItem("@mypharma/password", password)
    }

    async function handleLogin(user: User) {
        setErrorMessagePassword(undefined)
        setErrorMessage(undefined)

        const { payload } = await getUser(user)

        if (payload?.statusCode === 401) {
            return setErrorMessagePassword(payload.message)

        } else if (payload?.statusCode === 404) {
            return setErrorMessage(payload.message)
        }

        saveSession(payload)

        navigate("/")
    }

    return (
        <Container>
            <Content>
                <Form onSubmit={handleLogin}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite seu e-mail"
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

                    <button type="submit">Entrar</button>
                </Form>

                <Link id='link' to="/auth/register">Registrar-se</Link>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
