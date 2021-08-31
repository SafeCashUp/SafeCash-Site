import './App.css';

import { render } from "react-dom"
import React from "react";
import './index.css';

import Safecash from "./telas/Safecash";
import Veja from "./telas/Veja";
import Metas from "./telas/Metas";
import Gastos from "./telas/Gastos";
import Logo from "./telas/Logo";


class App extends React.Component {
  render (){ 

  return (
    <div>
    <Safecash/>
    <Veja/>
    <Metas/>
    <Gastos/>
    <Logo/>
    </div>
  );

}}

render(<App/>, window.document.getElementById("root"));

export default App;
