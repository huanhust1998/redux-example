import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import luythua from '../features/counter/counterSlice1'

//Redux store được tạo bằng cách sử dụng configureStore function của Redux ToolKit
// Một redux store cần có duy nhất một "root reducer" function truyền vào khi nó được tạo ra
//vì vậy nếu bạn có nhiều slice reducer funtions khác nhau
export default configureStore({
    reducer: {
        counter: counterReducer,
        luythua: luythua
    },
});


//ta chuyền 1 object {counter:counterReducer} điều này muốn nói chúng ta muốn có state.counter là đối tương Redux state
//và hàm counterReducer chịu trách nhiệm quyết định xem có cập nhật phần state.counter hay không bất kể khi nào action được dispatched