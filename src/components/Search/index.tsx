import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

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

interface RegisterProps {
    datas: Data[] | undefined;
    typeOfData: string | undefined;
    setData: ((value: any) => void) | undefined;
}

const Search = ({ datas, typeOfData, setData }: RegisterProps) => {
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const searchLower = search.toLowerCase();

        if (!datas) {
            return undefined;
        }

        const datasList = datas.filter((data: Data) =>
            data.name.toLowerCase().includes(searchLower)
        );

        setData && setData(datasList)
    }, [datas, search, setData])

    return (
        <Container>
            <Content>
                <FiSearch size={24} />

                <input
                    type="text"
                    placeholder={`Pesquise por ${typeOfData}`}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Content>
        </Container >
    )
}

export default Search
