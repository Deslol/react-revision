import {useEffect, useState} from "react";

function App() {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    const getAdvice = async () => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const {slip} = await res.json()
        const {advice} = slip
        setAdvice(advice)
        setCount((c) => c += 1)
    }

    useEffect(() => getAdvice, [])
    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
            <p>You have read <strong>{count}</strong> piece{count > 1 ? '' : 's'} of advice</p>
        </div>
    );
}

export default App;
