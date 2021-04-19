import { Switch, Route } from "react-router-dom";
import DataContextProvider from "./context/DataContextProvider";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PostDetails from "./components/PostDetails/PostDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <Header propsmessage={`Hello from`}/>
      <Switch>
          <Route path="/" render={(props) => (
    <Home {...props}  propsmessage={`Hello from`} /> )} exact/>
          <Route path="/posts" render={(props) => (
    <Posts {...props}  propsmessage={`Hello from`} /> )} exact/>
          <Route path="/post/:id" render={(props) => (
    <PostDetails {...props}  propsmessage={`Hello from`} /> )}/>
      </Switch>
      </DataContextProvider>
    </div>
  );
}

export default App;
