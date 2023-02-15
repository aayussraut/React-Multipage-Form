import React, { useState } from "react";
import ApplicantData from "./Page1";
import Page2 from "./Page2";
const MultiPageForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    id_type: "",
    id_no: "",
    gender: "",
    marital_status: "",
    caste: "",
    religion: "",
    profession: "",
    phone_number: "",
    state: "",
    district: "",
    local_level: "",
    ward_no: "",
    village_tole: "",
    temp_state: "",
    temp_district: "",
    temp_local_level: "",
    temp_ward_no: "",
    temp_village_tole: "",
  });

  const handleChange = (input) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
  };
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(true);

  if (page === 1) {
    return (
      <ApplicantData
        // values={values}
        formData={formData}
        setFormData={setFormData}
        setPage={setPage}
        handleChange={handleChange}
      />
    );
  } else if (page === 2) {
    return (
      <Page2
        formData={formData}
        setFormData={setFormData}
        setPage={setPage}
        handleChange={handleChange}
        checked={checked}
        setChecked={setChecked}
      />
    );
  }
};

export default MultiPageForm;
