import {useState} from "react";

function App() {
    const [advice, setAdvice] = useState("");

    const getAdvice = async () => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const {slip} = await res.json()
        const {advice} = slip
        setAdvice(advice)
    }
    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
        </div>
    );
}

export default App;
