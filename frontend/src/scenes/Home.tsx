import { useEffect, useState } from "react";
import "../styles/home.scss";

const STEPS = [
  "Open Missions (top left) and accept a job.",
  "Open the Map, click the target system, then press Connect.",
  "At the login prompt, open the tools menu (bottom left), launch the Password Cracker and click the Code field. Press Proceed once it finishes.",
  "Open the File Server. Launch the Copier or Deleter, click the tool to pick it up, then click a file.",
  "Disconnect before the trace reaches 100%, then open the mission (mail icon, bottom right) and press Complete.",
];

export default function Home() {
  const [traced, setTraced] = useState(false);

  useEffect(() => {
    setTraced(sessionStorage.getItem("traced") === "1");
    return () => {
      sessionStorage.removeItem("traced");
    };
  }, []);

  return (
    <div className="home">
      {traced && (
        <p className="home-alert" role="alert">
          You have been traced.
        </p>
      )}
      <h1>Welcome to Overlink.</h1>
      <p>
        You are a freelance hacker. Take jobs, break into systems, and get out
        before you are traced.
      </p>
      <h2>How to play</h2>
      <ol>
        {STEPS.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
