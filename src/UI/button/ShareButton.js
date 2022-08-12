import ShareIcon from "@mui/icons-material/Share";

import { CustomButton } from "./CustomButton";

export const ShareButton = ({ sx }) => {
  return (
    <>
      <CustomButton variant="text" startIcon={<ShareIcon />} sx={{ ...sx }}>
        Share
      </CustomButton>
    </>
  );
};
