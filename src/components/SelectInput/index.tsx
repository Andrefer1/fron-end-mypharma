import { useEffect, useRef, useState, useCallback } from "react";

import { useField } from "@unform/core";

import { Container } from "./styles";
import { IconType } from "react-icons/lib";

type BrandsOrCategories = {
    _id: string;
    name: string;
    description?: string;
}

interface SelectInputProps {
    name: string;
    icon: IconType;
    brandsOrCategories: BrandsOrCategories[]
    nameDataBeingUpdated?: string
}

const SelectInput = ({
    name,
    icon: Icon,
    brandsOrCategories,
    nameDataBeingUpdated,
    ...rest
}: SelectInputProps) => {

    const inputRef = useRef<HTMLSelectElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [fieldName, registerField]);

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={24} />}

            <select
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={nameDataBeingUpdated ? defaultValue : undefined}
                ref={inputRef}
                required
                {...rest}
            >
                <option value={nameDataBeingUpdated} hidden> Selecione uma categoria </option>
                {brandsOrCategories.map((data: BrandsOrCategories) => (
                    <option
                        key={data._id}
                        value={data.name}
                        defaultValue={data.name === nameDataBeingUpdated ? data.name : undefined}
                    >
                        {data.name}
                    </option>
                ))}
            </select>
        </Container>
    );
};

export default SelectInput;