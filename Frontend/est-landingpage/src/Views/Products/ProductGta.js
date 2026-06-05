import AboutGta from "./Components/GlobalTalent/AboutGta";
import "../../Assets/Scss/GlobalTalent/ProductGTa.scss";
import InfoGTa from "./Components/GlobalTalent/InfoGTa";
import ProcessGTa from "./Components/GlobalTalent/ProcessGTa";
import LiveExpGTa from "./Components/GlobalTalent/LiveExpGTa";
import { useEffect } from "react";

function ProductsGta(props) {
  useEffect(() => {
    props.callBack();
  });
  return (
    <div className="AboutGta">
      <div className="backgroundImageGTa">
        <AboutGta />
      </div>
      <InfoGTa />
      <ProcessGTa />
      <LiveExpGTa />
    </div>
  );
}

export default ProductsGta;
