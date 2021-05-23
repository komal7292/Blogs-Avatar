import React from 'react';
import './style.css';
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author='Sam' time='7:10'/>
      <CommentDetail author='Mac' time='9:10'/>
      <CommentDetail author='Jam' time='8:10'/>
    </div>
  );
}
export default App;
