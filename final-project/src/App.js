import "./App.scss";
import ColorKeyboard from "./components/ColorKeyboard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="keyboardsWrapper">
                    <ColorKeyboard color="palevioletred"></ColorKeyboard>
                    <br></br>
                    <ColorKeyboard color="purple"></ColorKeyboard>
                    <br></br>
                    <ColorKeyboard color="turquoise"></ColorKeyboard>
                    <br></br>
                    <ColorKeyboard color="yellowgreen"></ColorKeyboard>
                </div>
            </header>
        </div>
    );
}

export default App;
