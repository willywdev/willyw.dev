import {
  Bash_Dark,
  Bootstrap,
  CSS,
  Electron,
  Firebase_Dark,
  Git,
  Github_Dark,
  HTML,
  JavaScript,
  Jest,
  MongoDB,
  NeoVim_Dark,
  NodeJS_Dark,
  Photoshop,
  Postman,
  Powershell_Dark,
  Python_Dark,
  React_Dark,
  StyledComponents,
  TailwindCSS_Dark,
  TypeScript,
  VSCode_Dark,
  Vite_Dark,
  Webpack_Dark,
} from "react-skillicons";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section className="skills">
        <h2>My Skills</h2>
        <article className="skills__article">
          <HTML className="skills__icons" />
          <CSS className="skills__icons" />
          <JavaScript className="skills__icons" />
          <TypeScript className="skills__icons" />
          <React_Dark className="skills__icons" />
          <Python_Dark className="skills__icons" />
        </article>
        <article className="skills__article">
          <Electron className="skills__icons" />
          <Firebase_Dark className="skills__icons" />
          <MongoDB className="skills__icons" />
          <NodeJS_Dark className="skills__icons" />
          <Git className="skills__icons" />
          <Github_Dark className="skills__icons" />
        </article>
        <article className="skills__article">
          <Jest className="skills__icons" />
          <Photoshop className="skills__icons" />
          <Postman className="skills__icons" />
          <Powershell_Dark className="skills__icons" />
          <Bash_Dark className="skills__icons" />
          <NeoVim_Dark className="skills__icons" />
        </article>
        <article className="skills__article">
          <StyledComponents className="skills__icons" />
          <TailwindCSS_Dark className="skills__icons" />
          <Bootstrap className="skills__icons" />
          <Vite_Dark className="skills__icons" />
          <Webpack_Dark className="skills__icons" />
          <VSCode_Dark className="skills__icons" />
        </article>
      </section>
    </>
  );
}
