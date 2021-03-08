import {createSlice} from '@reduxjs/toolkit';


//1. redux toolkit có một function được gọi là createSlice, đảm nhận công việc tạo action type strings, action creator function and action object.
// tất cả những gì bạn làm là xác định tên cho slice, viết một đối tượng có một số reducer function trong đó, và nó sẽ tự động tạo action tương ứng
// ngoài trường name, createSlice cần chúng ta chuyền vào initial state cho reducers

//2. createSlice tự động tạo actions với tên giống với reducer functions chúng ta viết
export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        mulByAmount:(state,action)=>{
            console.log("action: ", action)
            state.value *=action.payload
        }
    },
});

export const {increment, decrement, incrementByAmount, mulByAmount} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;
