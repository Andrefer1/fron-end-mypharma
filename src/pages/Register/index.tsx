import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FiPlusSquare } from "react-icons/fi";

import * as UserActions from "../../app/store/actions/userActions"

import { Container, Content } from "./styles";
import Input from "../../components/Input";

const Register = () => {
    return (
        <Container>
            <Content>
                <form action="">
                    <input defaultValue='André' id='name' type='text' placeholder='Ex.: Fulano' />
                    <input defaultValue='andre@gmail.com' id='email' type='email' placeholder='Ex.: fulano@provedor.com' />
                    <input defaultValue='123456' id='password' type='password' placeholder='Digite sua senha' />
                    <input defaultValue='123456' id='confirmPassword' type='password' placeholder='Confirme sua senha' />

                    <button type="submit">Cadastrar</button>
                </form>

                <Link to=''>Resgistrar</Link>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.user.user
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)
