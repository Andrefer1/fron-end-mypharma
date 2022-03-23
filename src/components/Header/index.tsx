import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

import { Container, Content } from "./styles";

type User = {
    _id: string;
    name: string;
    email: string;
};

interface RegisterProps {
    user?: User;
    getUser?: any
    setSessionIsActive: (value: undefined) => void
}

const Header = ({ setSessionIsActive }: RegisterProps) => {
    const [username, setUsername] = useState<string | null>('')

    useEffect(() => {
        setUsername(localStorage.getItem("@mypharma/name"))
    }, [])

    function handleLogout() {
        localStorage.clear()

        setSessionIsActive(undefined)
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
