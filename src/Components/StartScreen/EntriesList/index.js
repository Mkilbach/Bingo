import React from "react";
import { Button, List, Tooltip, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./index.css";

const { Item } = List;
const { Text } = Typography;

const EntriesList = ({ removeEntry, value, size }) => {
    return (
        <List
            bordered
            size="small"
            header={
                <Text strong>
                    Ilość haseł: {value.length}/{Math.pow(size, 2)}
                </Text>
            }
            dataSource={value}
            renderItem={(item, i) => (
                <Item>
                    <div className="listItemContent">
                        <Text ellipsis>{item}</Text>
                        <div className="listItemIcon">
                            <Tooltip title="delete" placement="left">
                                <Button
                                    size="small"
                                    type="text"
                                    icon={<CloseOutlined />}
                                    onClick={() => removeEntry(i)}
                                />
                            </Tooltip>
                        </div>
                    </div>
                </Item>
            )}
        />
    );
};

export default EntriesList;
