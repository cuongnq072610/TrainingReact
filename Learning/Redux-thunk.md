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
### 3.1.Define
    - Redux-Saga là một thư viện redux middleware, giúp quản lý những side effect trong ứng dụng redux trở nên đơn giản hơn. Bằng việc sử dụng tối đa tính năng Generators (function*) của ES6, nó cho phép ta viết async code nhìn giống như là synchronos.
    * Note:- Phải hiểu cơ chế của Generator function của ES6
           - https://viblo.asia/p/generator-trong-javasccript-WEMGBjjVGQK
    - Với redux-saga , đơn giản bạn chỉ cần track theo try/catch block để theo dõi dòng code, bên cạnh đó còn có hàm giúp bạn track các action một cách dễ dàng.
### 3.2.Basic Helper
    -Fork: thực hiện một hoạt động non-blocking trên function được truyền cho nó.
    -Take: tạm dừng cho đến khi nhận được action
    -Race: chạy nhiều effect đồng thời, sau đó hủy tất cả nếu một trong số đó kết thúc.
    -Call: gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.
    -Put: dispatch một action.
    -Select: chạy một selector function để lấy data từ state.
    -takeLatest: có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
    -takeEvery: thực thi và trả lại kết quả của mọi actions được gọi.
### 3.3.Example
    https://viblo.asia/p/redux-saga-gAm5yqLA5db
