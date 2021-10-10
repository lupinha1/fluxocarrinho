import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./geral/home/";
import DetalheProduto from './geral/detalheProduto/index.js';
import Carrinho from './geral/carrinho/index.js'

const rootElement = document.getElementById("root");



ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
