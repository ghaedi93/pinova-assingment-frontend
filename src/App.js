import React from "react";
import Login from "./components/login-registration";
import { Route, Switch } from "react-router-dom";
import UserInformation from "./components/userInformation";
import Terms from "./components/termsAndConditions";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/userInformation" component={UserInformation} />
          <Route path="/terms" component={Terms} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
