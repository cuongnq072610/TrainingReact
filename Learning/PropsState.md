* [Props]()
* [State]()

# 1.State
    - State là nơi lưu trữ data của một component, là biến có thể thay đổi
    - State không thể thay đổi giá trị bằng cách gán giá trị mà phải thông qua câu lệnh setState()
    - Giá trị của state chỉ được sử dụng trong component đó 

# 2.Props
    - Props là thuộc tính của một component, chúng ta có thể thay đổi props của một component bằng các truyền dữ liệu từ ngoài vào.
    - Bằng props chúng ta có thể chuyển dữ liệu từ component cha đến component con.
    - Có 2 cách tạo một Props
        + tạo bằng thuộc tính defaultProps của component
        + chuyền giá trị từ component cha xuống component con
    - Props Validation:
        + Chúng ta dùng thuộc tính propTypes để xác định các kiểu truyền vào của từng Props trong component
        