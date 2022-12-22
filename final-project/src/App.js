import "./App.scss";
import { useState, useEffect } from "react";
import ColorKeyboard from "./components/ColorKeyboard";
import timeout from "./utils/util";

function App() {
    const [isOn, setIsOn] = useState(false);

    const colorList = ["orange", "pink", "sky", "green"];

    const initPlay = {
        isDisplay: false,
        colors: [],
        score: 0,
        userPlay: false,
        userColors: [],
    };

    const [play, setPlay] = useState(initPlay);
    const [flashColor, setFlashColor] = useState("");

    function startHandle() {
        setIsOn(true);
    }

    useEffect(() => {
        if (isOn) {
            setPlay({ ...initPlay, isDisplay: true });
        } else {
            setPlay(initPlay);
        }
    }, [isOn]);

    useEffect(() => {
        if (isOn && play.isDisplay) {
            let newColor = colorList[Math.floor(Math.random() * 4)];

            const copyColors = [...play.colors];
            copyColors.push(newColor);
            setPlay({ ...play, colors: copyColors });
        }
    }, [isOn, play.isDisplay]);

    useEffect(() => {
        if (isOn && play.isDisplay && play.colors.length) {
            displayColors();
        }
    }, [isOn, play.isDisplay, play.colors.length]);

    async function displayColors() {
        await timeout(1000);
        for (let i = 0; i < play.colors.length; i++) {
            setFlashColor(play.colors[i]);
            await timeout(1000);
            setFlashColor("");
            await timeout(1000);

            if (i === play.colors.length - 1) {
                const copyColors = [...play.colors];

                setPlay({
                    ...play,
                    isDisplay: false,
                    userPlay: true,
                    userColors: copyColors.reverse(),
                });
            }
        }
    }

    async function cardClickHandle(color) {
        if (!play.isDisplay && play.userPlay) {
            const copyUserColors = [...play.userColors];
            const lastColor = copyUserColors.pop();
            setFlashColor(color);

            if (color === lastColor) {
                if (copyUserColors.length) {
                    setPlay({ ...play, userColors: copyUserColors });
                } else {
                    await timeout(1000);
                    setPlay({
                        ...play,
                        isDisplay: true,
                        userPlay: false,
                        score: play.colors.length,
                        userColors: [],
                    });
                }
            } else {
                await timeout(1000);
                setPlay({ ...initPlay, score: play.colors.length });
            }
            await timeout(1000);
            setFlashColor("");
        }
    }

    function closeHandle() {
        setIsOn(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="cardWrapper">
                    {colorList &&
                        colorList.map((v, i) => (
                            <ColorKeyboard
                                onClick={() => {
                                    cardClickHandle(v);
                                }}
                                flash={flashColor === v}
                                color={v}
                            ></ColorKeyboard>
                        ))}
                </div>

                {isOn && !play.isDisplay && !play.userPlay && play.score && (
                    <div className="lost">
                        <div>
                            {" "}
                            Game over! <br></br>Score: {play.score}
                        </div>
                        <button onClick={closeHandle}>Start Again</button>
                    </div>
                )}
                {!isOn && !play.score && (
                    <button onClick={startHandle} className="startButton">
                        Play
                    </button>
                )}
                {isOn && (play.isDisplay || play.userPlay) && (
                    <div className="score">{play.score}</div>
                )}
            </header>
        </div>
    );
}

export default App;