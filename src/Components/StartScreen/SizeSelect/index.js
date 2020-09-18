import React from "react";

import { Select } from "antd";

const { Option } = Select;

const SizeSelect = ({ onChange, value }) => {
    return (
        <Select
            value={value}
            style={{ maxWidth: 150, width: "100%" }}
            onChange={onChange}
        >
            <Option value={3}>3x3</Option>
            <Option value={4}>4x4</Option>
            <Option value={5}>5x5</Option>
        </Select>
    );
};

export default SizeSelect;
