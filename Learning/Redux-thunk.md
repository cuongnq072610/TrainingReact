# Middleware

## 1.Define
    - Middleware khá phổ biến với các Framework server-side, nó được đặt giữa thời điểm server nhận request và thời điểm server response. 
    - Ở Redux, Middleware giải quyết vấn đề khác với các Framework server-side nhưng định nghĩa có phần tương tự: Hiểu một cách đơn giản middleware cho phép chúng ta can thiệp vào giữa thời điểm dispatch một action và thời điểm action đến được reducer.

    -Syntax:
        + Để sử dụng được Middleware chúng ta cần sử dụng function applyMiddleware của redux khi khởi tạo store.
        +Example:    
            import { createStore, applyMiddleware } from 'redux';
            import 'yourMiddleware' from 'your-middleware';
            import rootReducer from './reducers/rootReducer';

            const store = createStore(rootReducer, applyMiddleware(yourMiddleware));


## 2.Redux-thuck
### 2.1.Define
    - thunk cho phép chúng ta viết action là function thay vì bắt buộc là object như định nghĩa action mà Redux đưa ra.
### 2.2.Example
    https://viblo.asia/p/redux-cho-nguoi-moi-bat-dau-part-3-middleware-3Q75wDXMKWb#_middleware-1

## 3.Redux-saga