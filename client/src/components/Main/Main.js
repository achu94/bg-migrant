import News from "../News";
import Forum from "../Forum";

const Main = () => {
  return (
    <div className="main">
      <h1>Main Page</h1>

      <div style={{display: "flex", alignItems: "baseline"}}>
        <News />
        <Forum />
      </div>
    </div>
  );
};

export default Main;
