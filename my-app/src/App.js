import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Chat from "./Chat";
import Chat2 from "./Chat2";
import Header from "./header";
import Login from "./Login";
import Welcome from "./Welcome";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/chat2" component={Chat2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
