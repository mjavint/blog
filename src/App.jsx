import "./App.css";
import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";
import datas from "./data/db.json";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {datas.map((d) => (
            <Post
              id={d.id}
              title={d.title}
              description={d.description}
              key={d.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
