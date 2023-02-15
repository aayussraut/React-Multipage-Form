import React, { useState } from "react";

export default function ApplicantData({
  formData,
  setFormData,
  setPage,
  handleChange,
}) {
  // const [page1Data, setPage1Data] = useState({
  //   first_name: "",
  //   middle_name: "",
  //   last_name: "",
  //   dob: "",
  //   id_type: "",
  //   id_no: "",
  //   gender: "",
  //   marital_status: "",
  //   caste: "",
  //   religion: "",
  // });
  // const {
  //   first_name,
  //   middle_name,
  //   last_name,
  //   dob,
  //   id_type,
  //   id_no,
  //   gender,
  //   marital_status,
  //   caste,
  //   religion,
  // } = page1Data;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPage1Data((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const onNext = (e) => {
    e.preventDefault();
    // setFormData((prev) => ({
    //   ...prev,
    //   page1Data,
    // }));
    setPage(2);
  };

  return (
    <div className="container">
      <h1>Page 1</h1>
      <div className="offset-md-1 form-box">
        <form className="form-group p-3 col-md-6">
          <fieldset className="form-group border p-3 mb-3">
            <legend className="w-auto px-2 ">Applicant Data</legend>

            {/* ------------------- First Name ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="first_name" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange("first_name")}
                  id="first_name"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Middle Name ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="middle_name" className="col-sm-2 col-form-label">
                Middle Name
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange("middle_name")}
                  id="middle_name"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Last Name ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="last_name" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange("last_name")}
                  id="last_name"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- DOB ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="dob" className="col-sm-2 col-form-label">
                DOB
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange("dob")}
                  id="dob"
                  type="date"
                />
              </div>
            </div>

            {/* ------------------- Citizenship ? ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="id_type" className="col-sm-2 col-form-label">
                ID Type
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="id_type"
                  value={formData.id_type}
                  onChange={handleChange("id_type")}
                  id="id_type"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Citizenship Number ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="id_no" className="col-sm-2 col-form-label">
                ID Number
              </label>

              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="id_no"
                  value={formData.id_no}
                  onChange={handleChange("id_no")}
                  id="id_no"
                  type="text"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group border p-3">
            <legend className="w-auto px-2 ">Additional Information</legend>

            {/* ------------------- Gender ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-10">
                <select
                  value={formData.gender}
                  onChange={handleChange("gender")}
                  className="form-select"
                >
                  <option value="">SELECT GENDER</option>
                  <option value="Male">Male</option>
                  <option value="Male">Female</option>
                  <option value="Male">Others</option>
                </select>
              </div>
            </div>

            {/* ------------------- Marital Status ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-10">
                <select
                  value={formData.marital_status}
                  onChange={handleChange("marital_status")}
                  className="form-select"
                >
                  <option value="">SELECT GENDER</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
            </div>

            {/* ------------------- Caste ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Caste
              </label>
              <div className="col-sm-10">
                <select
                  value={formData.caste}
                  onChange={handleChange("caste")}
                  className="form-select"
                >
                  <option value="">SELECT CASTE</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
            </div>

            {/* ------------------- Religion ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Religion
              </label>
              <div className="col-sm-10">
                <select
                  value={formData.religion}
                  onChange={handleChange("religion")}
                  className="form-select"
                >
                  <option value="">SELECT RELIGION</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
            </div>

            {/* ------------------- Profession ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Profession
              </label>
              <div className="col-sm-10">
                <select
                  value={formData.profession}
                  onChange={handleChange("profession")}
                  className="form-select"
                >
                  <option value="">SELECT PROFESSION</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
            </div>
          </fieldset>
          <div className="mt-3">
            <button
              className="btn btn-primary float-end"
              type="button"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
