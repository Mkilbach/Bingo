import React from "react";
import { Button, Popconfirm, Space, Typography } from "antd";

import "./index.css";

const { Paragraph } = Typography;

const GameScreen = ({ endGame, entries = [], size = 3, toggleEntryMark }) => {
    return (
        <div className="gameContainer">
            <Space direction="vertical" style={{ width: "100%" }}>
                <div
                    className="gameGrid"
                    style={{
                        gridTemplateColumns: `${"1fr ".repeat(size)}`,
                        width: `${(entries.length / size) * 130}px`,
                    }}
                >
                    {entries.map((el, i) => {
                        return (
                            <div
                                key={i}
                                className={`gridItem ${
                                    el.isMarked && "gridItemActive"
                                }`}
                                onClick={() => toggleEntryMark(i)}
                            >
                                <Paragraph ellipsis={{ rows: 3 }}>
                                    {el.name}
                                </Paragraph>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <Popconfirm
                        title="Czy na pewno chcesz wyjść?"
                        okText="Tak"
                        cancelText="Nie"
                        onConfirm={endGame}
                    >
                        <Button type="primary">
                            End!
                        </Button>
                    </Popconfirm>
                </div>
            </Space>
        </div>
    );
};

export default GameScreen;
