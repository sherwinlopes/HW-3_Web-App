import { useState } from "react";
import "./App.css"; 

function App() {
  const colors = ["#8AE766", "#FF4B4B", "#E9D23F", "#6A75F5"];
  const [bgColor, setBgColor] = useState(colors[0]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomIndex]);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>Hello World!</h1>
      <button onClick={getRandomColor}>Change Color</button>
    </div>
  );
}

export default App;
