import React from "react";
import { Button, Space, Typography } from "antd";

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
                        width: `${(entries.length / size) * 100}px`,
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
                    <Button type="primary" onClick={endGame}>
                        End!
                    </Button>
                </div>
            </Space>
        </div>
    );
};

export default GameScreen;
