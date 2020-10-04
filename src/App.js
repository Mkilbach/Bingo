import React, { useEffect, useState, useRef } from "react";
import shuffle from "./utls/shuffle";

import MainLayout from "./Components/MainLayout";
import StartScreen from "./Components/StartScreen";
import GameScreen from "./Components/GameScreen";

import { predefinedEntries } from "./predefinedEntries";
import trudne from "./assets/audio/trudnetrudne.mp3";
import stronthold from "./assets/audio/stronthold.mp3";

import "./App.css";

const storageEntries = JSON.parse(localStorage.getItem("entries"));
const storegaSize = JSON.parse(localStorage.getItem("size"));
const storageIsStarted = JSON.parse(localStorage.getItem("isStarted"));

function App() {
    const audioStartGame = useRef();
    const audioConfirmEndGame = useRef();
    const [isStarted, setIsStarted] = useState(!!storageIsStarted);
    const [size, setSize] = useState(storegaSize || 3);
    const [entries, setEntries] = useState(storageEntries || []);

    const startGame = providedEntries => {
        setEntries(providedEntries || shuffle(entries));
        setIsStarted(true);
        localStorage.setItem("isStarted", JSON.stringify(true));
        audioStartGame.current.play();
    };

    const endGame = () => {
        setSize(3);
        setEntries([]);
        setIsStarted(false);
        localStorage.setItem("isStarted", JSON.stringify(false));
    };

    const startRandom = () => {
        const randomEntries = shuffle([...predefinedEntries]).splice(
            0,
            Math.pow(size, 2)
        );
        startGame(mapEntriesToObjects(randomEntries));
    };

    const mapEntriesToObjects = arr => {
        return arr.map(el => ({ marked: false, name: el }));
    };

    const addEntry = entry => {
        setEntries(arr => [...arr, { name: entry, isMarked: false }]);
    };

    const toggleEntryMark = index => {
        const newEntries = [...entries];
        newEntries[index].isMarked = !newEntries[index].isMarked;
        setEntries(newEntries);
    };

    useEffect(() => {
        const maxLength = Math.pow(size, 2);
        if (entries.length > maxLength) {
            setEntries(arr => arr.slice(0, maxLength));
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
                    startGame={startGame}
                    startRandomGame={startRandom}
                    addEntry={addEntry}
                />
            ) : (
                <GameScreen
                    endGame={endGame}
                    entries={entries}
                    size={size}
                    toggleEntryMark={toggleEntryMark}
                    confirmEndGame={() => audioConfirmEndGame.current.play()}
                />
            )}
            <audio src={trudne} ref={audioStartGame} />
            <audio src={stronthold} ref={audioConfirmEndGame} />
        </MainLayout>
    );
}

export default App;
