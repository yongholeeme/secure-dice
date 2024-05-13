import React, {useState} from 'react'

export function SecureDice() {
    const [diceValue, setDiceValue] = useState(1)

    const rollDice = () => {
        setDiceValue(Math.floor(Math.random() * 6) + 1)
    }

    return (
        <div>
            <div>{diceValue}</div>
            <button onClick={rollDice}>주사위 굴리기</button>
        </div>
    )
}
