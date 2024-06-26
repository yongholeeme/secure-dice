import React, {useCallback, useState} from 'react'
import styles from './SecureDice.module.css'
import {secureRandom} from '@yongholeeme/secure-random'

const 주사위_최소값 = 1
const 주사위_최대값 = 6

export function SecureDice() {
    const [diceValue, setDiceValue] = useState(주사위_최소값)

    const rollDice = useCallback(() => {
        setDiceValue(Math.floor(secureRandom() * 주사위_최대값) + 주사위_최소값)
    }, [])

    return (
        <div>
            <div className={styles.diceContainer}>{diceValue}</div>
            <button className={styles.rollButton} onClick={rollDice}>
                주사위 굴리기
            </button>
        </div>
    )
}
