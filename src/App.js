import React from 'react';
import './style.css';
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author='Sam' time='Todat at 7:10PM' content='Nice blog post!'/>
      <CommentDetail author='Mac' time='Just now 9:10PM' content='Informative post!'/>
      <CommentDetail author='Jam' time='Yesterday at 8:10AM' content='I like the subject!'/>
    </div>
  );
}
export default App;
