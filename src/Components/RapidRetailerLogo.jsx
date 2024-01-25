import { Icon } from "@mui/material"; // Import Material UI's Icon component
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const RapidRetailerLogo = () => (
  <>
    <span className="rapid">Rapid</span>
    <Icon className="fa-rocket">
      <RocketLaunchIcon />
    </Icon>
    {/* Use Material UI's Icon component directly */}
    <span className="retailer">Retailer</span>
  </>
);

export default RapidRetailerLogo;
