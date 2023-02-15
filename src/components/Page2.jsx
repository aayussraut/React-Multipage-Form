import React, { useState, useEffect } from "react";
export default function Page2({
  formData,
  setPage,
  handleChange,
  checked,
  setChecked,
}) {
  const onNext = (e) => {
    e.preventDefault();
    setPage(2);
  };
  const onPrev = (e) => {
    e.preventDefault();
    setPage(1);
  };
  // const [checked, setChecked] = useState(true);
  // useEffect(() => {
  //   setChecked(false);
  //   console.log("checked", checked);
  // }, []);

  return (
    <div className="container">
      <h1>Page 2</h1>
      <div className="offset-md-1 form-box">
        <form className="form-group p-3 col-md-6">
          <fieldset className="form-group border p-3 mb-3">
            <legend className="w-auto px-2 ">
              Applicant's Permanent Address
            </legend>

            {/* ------------------- Phone Number ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="phone_number" className="col-sm-2 col-form-label">
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange("phone_number")}
                  id="phone_number"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- State ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="state" className="col-sm-2 col-form-label">
                State
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleChange("state")}
                  id="state"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- District ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="district" className="col-sm-2 col-form-label">
                District
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="district"
                  value={formData.district}
                  onChange={handleChange("district")}
                  id="district"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Local Level ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="local_level" className="col-sm-2 col-form-label">
                Local Level
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="local_level"
                  value={formData.local_level}
                  onChange={handleChange("local_level")}
                  id="local_level"
                  type="date"
                />
              </div>
            </div>

            {/* ------------------- Ward Number------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="ward_no" className="col-sm-2 col-form-label">
                Ward Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="ward_no"
                  value={formData.ward_no}
                  onChange={handleChange("ward_no")}
                  id="ward_no"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Village/Tole ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="village_tole" className="col-sm-2 col-form-label">
                Village/Tole
              </label>

              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="village_tole"
                  value={formData.village_tole}
                  onChange={handleChange("village_tole")}
                  id="village_tole"
                  type="text"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group border p-3">
            <legend className="w-auto px-2 ">
              Applicant's Temporary Address
            </legend>

            <div className="d-flex mb-3 ">
              {console.log("checked", checked)}
              <input
                checked={checked}
                type="checkbox"
                // value={checked}
                onChange={() => {
                  setChecked((prevValue) => {
                    // console.log("prevvalue", prevValue);
                    return prevValue ? false : true;
                  });
                  // console.log("checked", checked);
                }}
              />
              <div className="ms-3">Copy Permanent Address</div>
            </div>

            {/* ------------------- State ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="state" className="col-sm-2 col-form-label">
                State
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="state"
                  value={checked ? formData.state : formData.temp_state}
                  onChange={handleChange("temp_state")}
                  id="state"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- District ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="district" className="col-sm-2 col-form-label">
                District
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="district"
                  value={checked ? formData.district : formData.temp_district}
                  onChange={handleChange("temp_district")}
                  id="district"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Local Level ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="local_level" className="col-sm-2 col-form-label">
                Local Level
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="local_level"
                  value={
                    checked ? formData.local_level : formData.temp_local_level
                  }
                  onChange={handleChange("temp_local_level")}
                  id="local_level"
                  type="date"
                />
              </div>
            </div>

            {/* ------------------- Ward Number------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="ward_no" className="col-sm-2 col-form-label">
                Ward Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="ward_no"
                  value={checked ? formData.ward_no : formData.temp_ward_no}
                  onChange={handleChange("temp_ward_no")}
                  id="ward_no"
                  type="text"
                />
              </div>
            </div>

            {/* ------------------- Village/Tole ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="village_tole" className="col-sm-2 col-form-label">
                Village/Tole
              </label>

              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="village_tole"
                  value={
                    checked ? formData.village_tole : formData.temp_village_tole
                  }
                  onChange={handleChange("temp_village_tole")}
                  id="village_tole"
                  type="text"
                />
              </div>
            </div>
          </fieldset>
          <div className=" d-flex mt-3">
            <button
              className="btn btn-primary float-start me-auto"
              type="button"
              onClick={onPrev}
            >
              Prev
            </button>
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
