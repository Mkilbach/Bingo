import React from "react";

import { Button, Space, Typography } from "antd";

import SizeSelect from "./SizeSelect";
import EntriesList from "./EntriesList";
import AddEntry from "./AddEntry";

import "./index.css";

const { Title } = Typography;

const StartScreen = ({
    size,
    setSize,
    entries,
    setEntries,
    startGame,
    addEntry,
}) => {
    const removeEntry = (index) => {
        const newEntries = [...entries];
        newEntries.splice(index, 1);
        setEntries(newEntries);
    };

    const mapEntries = (list) => list.map((el) => el.name);

    const isReady = entries.length >= Math.pow(size, 2);

    return (
        <div className="mainContainer">
            <Space direction="vertical" style={{ width: "100%" }}>
                <Title className="title" level={4}>
                    Wybierz wielkość i podaj hasła
                </Title>
                <SizeSelect onChange={setSize} value={size} />
                <div className="entriesContainer">
                    <Space direction="vertical">
                        <AddEntry addEntry={addEntry} disabled={isReady} />
                        <EntriesList
                            removeEntry={removeEntry}
                            value={mapEntries(entries)}
                            size={size}
                        />
                    </Space>
                </div>
                <Button type="primary" disabled={!isReady} onClick={startGame}>
                    Jestem!
                </Button>
            </Space>
        </div>
    );
};

export default StartScreen;
