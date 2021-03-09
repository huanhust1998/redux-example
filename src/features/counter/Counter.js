import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount, mulByAmount,
} from './counterSlice';
import {luythua} from "./counterSlice1";
import styles from './Counter.module.css';
import {selectCount_LuyThua} from "./counterSlice1";

// sử dụng useSelector vaf useDispatch hook để giao tiếp với Redux store
export function Counter() {
    const count = useSelector(selectCount);
    const luythua1 = useSelector(selectCount_LuyThua)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    //sau khi click vào button, ta có hàm dispatch(), hàm này sẽ chuyển action tới store
    //mà trong store, các action đã được định nghĩ trước
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <span className={styles.value}>{incrementAmount}</span>
                <span className={styles.value}>{luythua1}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(luythua())}
                >
                    +h
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </div>
    );
}
