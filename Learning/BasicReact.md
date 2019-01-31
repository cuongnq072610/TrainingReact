* [JSX](#JSX)
* [Component](#Component)


# 1.JSX

### JSX là gì?
    JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.
### Tại sao lại nên dùng JSX?
    * JSX nhanh hơn vì hiệu năng của nó khi chuyển đổi Javascript
    * Cách viết gần với các thẻ HTML, nên các developer có thể hiểu một cách dễ dàng 
### Syntax
    import React from 'react';
    class App extends React.Component {
    render() {
        return (
             <div>
                 Hello World!!!
             </div>
            );
        }
    }
    export default App;

    *Note:
        - Các component thường chỉ trả về 1 element nếu muốn trả về nhiều element thì phải bọc chúng vào một thẻ lớn bên ngoài thường sẽ là thẻ <div>
        - Có thể dùng các expression của Javascipt 
        - Khi Styling thì phải dùng syntax camelCase để đặt tên
    
# 2.Component

### Vòng đợi của một Component

    * Khi khởi tạo:
        - constructor() //Khởi tạo giá trị ban đầu
        - componentWillMount() //Chạy trc khi render component
        - render() //Render ra các component
        - componentDidMount() //Chạy sau khi render component
    * Khi update component:
        - componentWillReceiveProps()
        - shouldComponentUpdate()
        - componentWillUpdate()
        - render()
        - componentDidUpdate()
