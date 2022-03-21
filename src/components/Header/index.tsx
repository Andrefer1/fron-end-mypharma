import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

import * as UserActions from "../../app/store/actions/userActions"

import { Container, Content } from "./styles";

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
};

interface RegisterProps {
    user?: User;
    getUser?: any
    setSessionIsActive: (value: void) => void
}


const Header = ({ setSessionIsActive }: RegisterProps) => {
    const [username, setUsername]
        = useState<string | null>('')


    useEffect(() => {
        setUsername(localStorage.getItem("@mypharma/name"))
    }, [])

    function handleLogout() {
        const session = localStorage.removeItem("@mypharma/email")

        setSessionIsActive(session)
    }

    return (
        <Container>
            <Content>

                <p>Bem-vindo {username}!</p>




                <button onClick={handleLogout}>Logout
                    <FiLogOut size={20} />
                </button>
            </Content>
        </Container >
    )
}

export default Header

// const mapStateToProps = (state: any) => ({
//     users: state.user.user
// })

// const mapDispatchToProps = (dispatch: any) =>
//     bindActionCreators(UserActions, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Header)