import AboutGTe from "./Components/GlobalTeacher/AboutGte";
import "../../Assets/Scss/GlobalTeacher/ProductGTe.scss";
import InfoGTe from "./Components/GlobalTeacher/InfoGTe";
import ProcessGTe from "./Components/GlobalTeacher/ProcessGTe";
import LiveExpGTe from "./Components/GlobalTeacher/LiveExpGTe";
import { useEffect } from "react";

function ProductsGTe(props) {
  useEffect(() => {
    props.callBack();
  });
  return (
    <div className="AboutGTe">
      <div className="backgroundImageGTe">
        <AboutGTe />
      </div>
      <InfoGTe />
      <ProcessGTe />
      <LiveExpGTe />
    </div>
  );
}

export default ProductsGTe;
