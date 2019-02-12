import React from 'react'
import ReactDom from 'react-dom'
import App from '../App'
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';

it('Test App Component', () => {
  const div = document.createElement('div')

  ReactDom.render(<App />, div)
  expect(div.textContent).toEqual('App ComponentComment BoxSend Comment')
  ReactDom.unmountComponentAtNode(div)
})

it('show the comment box component', () => {
    const wrapped = shallow(<App/>) // trả về App component (truy cập App component)
    expect(wrapped.find(CommentBox).length).toEqual(1)  // tìm thằng CommentBox và kiểm tra xem nó có tồn tại trong App hay không?
    wrapped.unmount
})