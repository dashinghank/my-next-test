import type { NextPage } from "next";
import HelloWorld from "../components/HelloWorld";
const Home: NextPage = () => {
  return (
    <div>
      <HelloWorld name="Hank" age={10} students />
    </div>
  );
};

export default Home;
