import css from "./RecentActivityStyle";
import Device from "./Device/Device";
import { device } from "./Device/DeviceStyle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";

const RecentActivity = () => {
  return (
    <>
      <Device
        deviceIcon={<PhoneIphoneIcon sx={device} />}
        optionName="Windows 10 - Chrome"
        location="Suceava, SV - 25.05.2022 at 13:44"
      />
      <Device
        deviceIcon={<ComputerIcon sx={device} />}
        optionName="iOS 15.2 - Chrome Mobile"
        location="Pitesti, AG - 10.06.2022 at 07:32"
      />
      <style jsx>{css}</style>
    </>
  );
};

export default RecentActivity;
