import { AddContactInfo } from "components/addContanctInfo/AddContactInfo";
import { AddDescription } from "components/addDescription/AddDescription";
import { AddDetails } from "components/addDetails/AddDetails";
import { AddPhotosVideos } from "components/addPhotosVideos/AddPhotosVideos";
import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";

import AddPageStyle, { addTitle } from "./AddPageStyle";

export const AddPage = () => {
  return (
    <div className="add-page">
      <Text variant="h5" sx={addTitle}>
        Add new
      </Text>

      <form>
        <AddDetails />

        <AddPhotosVideos />

        <AddDescription />

        <AddContactInfo />

        <CustomButton variant="outlined">Preview</CustomButton>

        <CustomButton variant="text">Publish</CustomButton>
      </form>

      <style jsx>{AddPageStyle}</style>
    </div>
  );
};
