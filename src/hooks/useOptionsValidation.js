import { useState } from "react";

const useOptionsValidation = ({ optionName, allData }) => {
  let gender1 = null;
  const fullName = allData?.response
    ? allData.response.data.fullName.split(" ")
    : "";
  const [name, setName] = useState(fullName[0] ? fullName[0] : "");
  const [lastName, setLastName] = useState(fullName[1] ? fullName[1] : "");
  const [gender, setGender] = useState(gender1);
  const [dateOfBirth, setDateOfBirth] = useState(
    allData?.response ? allData.response.data.dateOfBirth : ""
  );
  const [email, setEmail] = useState(
    allData?.response ? allData.response.data.mail : ""
  );
  const [phone, setPhone] = useState(
    allData?.response ? allData.response.data.phone : ""
  );
  const [address, setAddress] = useState(
    allData?.response ? allData.response.data.address : ""
  );

  const setEnteredName = (event) => {
    setName(event.target.value);
  };
  const setEnteredLastName = (event) => {
    setLastName(event.target.value);
  };
  const setEnteredGender = (event) => {
    setGender(event.target.value);
    debugger;
  };
  const setEnteredDate = (event) => {
    setDateOfBirth(event.target.value);
  };
  const setEnteredEmail = (event) => {
    setEmail(event.target.value);
  };
  const setEnteredPhone = (event) => {
    setPhone(event.target.value);
  };
  const setEnteredAddress = (event) => {
    setAddress(event.target.value);
  };

  const defaultProps = {
    name,
    lastName,
    setEnteredName,
    setEnteredLastName,
  };

  const result = optionName.map((option) => {
    const handler = () => {
      console.log("handler");
    };
    switch (option) {
      case "Full Name":
        if (
          !name ||
          !lastName ||
          lastName.length < 3 ||
          /\d/.test(lastName) ||
          name.length < 3 ||
          /\d/.test(name) ||
          name.length > 15
        ) {
          return {
            ...defaultProps,
            error: {
              emailError: true,
              message: "At least 3 characters or name contains numbers.",
            },
          };
        } else {
          return {
            ...defaultProps,
            error: false,
            handler,
          };
        }
      case "Gender":
        if (
          !gender ||
          /\d/.test(gender) ||
          gender.length < 1 ||
          gender.length > 15
        ) {
          return {
            gender,
            setEnteredGender,
            error: {
              emailError: true,
              message: "Gender was not found.",
            },
          };
        } else {
          return {
            gender,
            setEnteredGender,
            error: false,
            handler,
          };
        }
      case "Date of birth":
        if (!dateOfBirth) {
          return {
            dateOfBirth,
            setEnteredDate,
            error: {
              emailError: true,
              message: "Wrong date.",
            },
          };
        } else {
          return {
            dateOfBirth,
            setEnteredDate,
            error: false,
            handler,
          };
        }
      case "Email address":
        if (!email || !email.includes("@")) {
          return {
            email,
            setEnteredEmail,
            error: {
              emailError: true,
              message: "Wrong email address.",
            },
          };
        } else {
          return {
            email,
            setEnteredEmail,
            error: false,
            handler,
          };
        }
      case "Phone number":
        if (
          !phone ||
          !/\d/.test(phone) ||
          phone.length < 10 ||
          phone.length > 15
        ) {
          return {
            phone,
            setEnteredPhone,
            error: {
              emailError: true,
              message: "Wrong phone number.",
            },
          };
        } else {
          return {
            phone,
            setEnteredPhone,
            error: false,
            handler,
          };
        }
      case "Address":
        if (!address || address.length > 20) {
          return {
            address,
            setEnteredAddress,
            error: {
              emailError: true,
              message: "Wrong address.",
            },
          };
        } else {
          return {
            address,
            setEnteredAddress,
            error: false,
            handler,
          };
        }

      default:
        return null;
    }
  });
  return result;
};

export default useOptionsValidation;
