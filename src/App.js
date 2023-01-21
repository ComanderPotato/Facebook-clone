import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : (
        <> */}
      {/* Header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Sidebar */}
        {/* Feed (center)*/}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
      {/* </>
        )} */}
    </div>
  );
}

export default App;
