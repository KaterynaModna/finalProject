import React from 'react';
import './css/style.scss';
import './css/main.scss';


// components

import Background from './components/Background';
import Table_grid from './components/Table_grid';
import Grida from './components/Grid';
import FAQ from './components/faq';
import Ccomments from './components/comments';
import FormFooter from './components/FormFooter';

function App() {
  return (
    <div className="App wrapper">
      <Background/>
      <Grida />
      <Table_grid />
      <FAQ />
      <Ccomments/>
      <FormFooter/>
    </div>
  );
}

export default App;
