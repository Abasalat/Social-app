import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Createpost from "./components/Createpost";
import PostList from "./components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-content">
      <SideBar selectedTab={selectedTab}></SideBar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <Createpost></Createpost>
        ) : (
          <PostList></PostList>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
