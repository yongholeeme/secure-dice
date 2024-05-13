import React, {useState} from 'react'
import styles from './SecureDice.module.css'

export function SecureDice() {
    const [diceValue, setDiceValue] = useState(1)

    const rollDice = () => {
        setDiceValue(Math.floor(Math.random() * 6) + 1)
    }

    return (
        <div>
            <div className={styles.diceContainer}>{diceValue}</div>
            <button className={styles.rollButton} onClick={rollDice}>
                주사위 굴리기
            </button>
        </div>
    )
}
