import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

import Search from "../Search";

import { Container, Content } from "./styles";

type Data = {
    _id: string;
    name: string;
    description?: string;
    price?: number;
    stock?: number;
    brand?: string
    category?: string
}

interface OwnProps {
    data: Data[]
    typeOfData: string
}

interface DispatchProps {
    setData?: (value: any) => void
    setSessionIsActive: (value: undefined) => void
}

type HeaderProps = OwnProps & DispatchProps

const Header = ({ data, typeOfData, setData, setSessionIsActive }: HeaderProps) => {
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

                <div>
                    <p>Bem-vindo {username}!</p>

                    <button onClick={handleLogout}>Logout
                        <FiLogOut size={20} />
                    </button>
                </div>

                <Search typeOfData={typeOfData} datas={data} setData={setData} />

            </Content>
        </Container >
    )
}

export default Header

