import "./styles.css";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <h1>REACT - PAYMENT CARD</h1>
      <Card
        date={"17 Sep 2020"}
        subHeading={"Case Study"}
        heading={"Apple Gift Payment"}
        devices={"MacOS - Mobile"}
        logo={
          "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png"
        }
        color={"whitesmoke"}
      />
      <Card
        date={"28/10/2020"}
        subHeading={"Case Study"}
        heading={"Amazon Gift Pay"}
        devices={"Desktop - Mobile"}
        logo={
          "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-vector-logo-icons-png-4.png"
        }
        color={"orange"}
      />
    </div>
  );
}
