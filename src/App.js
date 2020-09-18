import React, { useEffect, useState } from "react";
import shuffle from "./utls/shuffle";

import MainLayout from "./Components/MainLayout";
import StartScreen from "./Components/StartScreen";
import GameScreen from "./Components/GameScreen";

import "./App.css";

const storageEntries = JSON.parse(localStorage.getItem("entries"));
const storegaSize = JSON.parse(localStorage.getItem("size"));
const storageIsStarted = JSON.parse(localStorage.getItem("isStarted"));

function App() {
    const [isStarted, setIsStarted] = useState(!!storageIsStarted);
    const [size, setSize] = useState(storegaSize || 3);
    const [entries, setEntries] = useState(storageEntries || []);

    const changeGameState = (flag) => {
        if (!flag) {
            setSize(3);
            setEntries([]);
        } else {
            setEntries(shuffle(entries));
        }

        setIsStarted(flag);
        localStorage.setItem("isStarted", JSON.stringify(flag));
    };

    const addEntry = (entry) => {
        setEntries((arr) => [...arr, { name: entry, isMarked: false }]);
    };

    const toggleEntryMark = index => {
        const newEntries = [...entries];
        newEntries[index].isMarked = !newEntries[index].isMarked;
        setEntries(newEntries)
    }

    useEffect(() => {
        const maxLength = Math.pow(size, 2);
        if (entries.length > maxLength) {
            setEntries((arr) => arr.slice(0, maxLength));
        }
    }, [size, entries]);

    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    useEffect(() => {
        localStorage.setItem("size", JSON.stringify(size));
    }, [size]);

    return (
        <MainLayout>
            {!isStarted ? (
                <StartScreen
                    size={size}
                    setSize={setSize}
                    entries={entries}
                    setEntries={setEntries}
                    startGame={() => changeGameState(true)}
                    addEntry={addEntry}
                />
            ) : (
                <GameScreen
                    endGame={() => changeGameState(false)}
                    entries={entries}
                    size={size}
                    toggleEntryMark={toggleEntryMark}
                />
            )}
        </MainLayout>
    );
}

export default App;
