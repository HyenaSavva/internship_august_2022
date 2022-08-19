import { Select } from "components/common/selectInput/Select";
import { TextInput } from "components/common/textInput/TextInput";
import { useState } from "react";

import { Text } from "UI/text/Text";

import AddDetailsStyle, { textPrice } from "./AddDetailsStyle";

export const AddDetails = ({ label, name, ...rest }) => {
  return (
    <>
      <div className="add-details">
        <div className="add-details__title-subtitle">
          <Text variant="h6">Details</Text>

          <Text variant="body2">Be as thorough as you can.</Text>
        </div>

        <div className="add-details__inputs">
          <TextInput
            label="Title"
            name="title"
            value={rest.titleValue}
            placeholder="Title"
            type="text"
            touched={rest.titleTouched}
            onChange={rest.onChange}
            error={rest.titleError}
          />

          <Select
            label="Category"
            name="category"
            value={rest.categoryValue}
            onChange={rest.onChange}
            error={rest.categoryError}
          ></Select>

          <div className="add-details__price">
            <TextInput
              label="Price"
              name="price"
              placeholder=""
              type="text"
              inputstyle="add-details__price-input"
              value={rest.priceValue}
              onChange={rest.onChange}
              error={rest.priceError}
              onBlur={rest.onBlurPrice}
            />

            <Text variant="body2" sx={textPrice}>
              lei
            </Text>
          </div>
        </div>
      </div>

      <style jsx>{AddDetailsStyle}</style>
    </>
  );
};
