import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Chat from "./Chat";
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
