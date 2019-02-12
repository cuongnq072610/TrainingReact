import React from 'react'

export default (props) => (
  <div>
    <form>
      <h4>Comment Box</h4>
      <textarea value={props.value}/>
      <div><button>Send Comment</button></div>
    </form>
  </div>
)