import Image from "next/image";
import { Button, Htag } from "../components/index";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={"h1"}>asdasd</Htag>
      <Htag tag={"h2"}>asd</Htag>
      <Htag tag={"h3"}>er</Htag>
      <Button apperance={"primary"}>zxc</Button>
      <Button apperance={"ghost"} arrow={"right"}>
        zxc
      </Button>
    </div>
  );
}
