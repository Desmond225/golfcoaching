import React from 'react';
import AddScore from './containers/addscore';
import VisibleTodoList from './containers/visiblescorelist'
import Footer from './components/footer';


const App = () => (
  <div>
    <AddScore />
    <VisibleTodoList />
    <Footer/>

  </div>
)

export default App;
