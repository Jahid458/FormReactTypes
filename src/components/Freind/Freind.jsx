import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Freind = () => {
  const gift = useContext(AssetContext)
  return (
    <div>
       <h2>Freinds</h2>
       <p>has:{gift}</p>
    </div>
  );
};

export default Freind;