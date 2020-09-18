import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddEntry = ({ addEntry, disabled }) => {
    const [inputValue, setInputValue] = useState("");
    const [tooltip, setTooltip] = useState(false);

    const submitInput = () => {
        if (inputValue.length < 3) {
            setTooltip(true);
            return;
        }

        addEntry(inputValue);
        setInputValue("");
    };

    const changeInput = (val) => {
        if (val.length >= 3) {
            setTooltip(false);
        }
        setInputValue(val);
    };

    return (
        <>
            <Tooltip
                title={"wpisz conajmniej 3 znaki"}
                placement="topLeft"
                visible={tooltip}
            >
                <Input
                    disabled={disabled}
                    suffix={
                        <PlusOutlined
                            onClick={() => {
                                !disabled && submitInput();
                            }}
                        />
                    }
                    value={inputValue}
                    onChange={(e) => changeInput(e.target.value)}
                    onPressEnter={submitInput}
                    onBlur={() => setTooltip(false)}
                />
            </Tooltip>
        </>
    );
};

export default AddEntry;
