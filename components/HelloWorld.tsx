import type { NextPage } from "next";

interface IProps {
  name: string;
  age: number;
  students: boolean;
}

const HelloWorld: NextPage<IProps> = (props) => {
  console.log(props.age);
  return <div>halo</div>;
};

export default HelloWorld;
