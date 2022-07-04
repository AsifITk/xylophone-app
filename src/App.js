import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let size = [
    ["3vw", "60vh", "#ee534f", "./audio/bvng.mp3", "C", "35vh"],
    ["3vw", "50vh", "#fea726", "./audio/crfo.mp3", "D", "30vh"],
    ["3vw", " 40vh", "#ffc927", "./audio/dtse.mp3", "E", "25vh"],
    ["3vw", "30vh", "#ffc927", " ./audio/edqt.mp3", "F", "23vh"],
    ["3vw", "25vh", "#66bb69", "./audio/ldcc.mp3", "G", "20vh"],
    ["3vw", "20vh", "#2cb5f6", "./audio/peoi.mp3", "A", "15vh"],
    ["3vw", "15vh", "#7e57c2", "./audio/tena.mp3", "B", "12vh"],
    ["3vw", "10vh", "#ee534f", "./audio/udgb.mp3", "C", "8vh"],
  ];

  return (
    <div className="container">
      {size.map((item) => {
        return (
          <Card
            width={item[0]}
            height={item[1]}
            color={item[2]}
            audiolink={item[3]}
            innerText={item[4]}
            number={size.indexOf(item) + 1}
            top={item[5]}
          />
        );
      })}
    </div>
  );
}

export default App;
