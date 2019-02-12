import React from 'react'
import CommentBox from '../CommentBox'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer';
let wrapped
// Khởi tạo cho tất cả các testcase
// beforeEach(() => {
    
// })

// afterEach(() => {
    
// })

it('has a text area and a button', () => {
    wrapped = mount(<CommentBox />)
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
    wrapped.unmount()
})

//Snapshot Example to check UI 
it('render correctly', () => {
    wrapped = renderer.create(<CommentBox />).toJSON()
    expect((wrapped)).toMatchSnapshot()
})