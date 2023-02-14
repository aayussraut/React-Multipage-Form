export default function ApplicantData() {
  return (
    <div className="container">
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
                <input className="form-control" id="first_name" type="text" />
              </div>
            </div>

            {/* ------------------- Middle Name ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="middle_name" className="col-sm-2 col-form-label">
                Middle Name
              </label>
              <div className="col-sm-10">
                <input className="form-control" id="middle_name" type="text" />
              </div>
            </div>

            {/* ------------------- Last Name ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="last_name" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input className="form-control" id="last_name" type="text" />
              </div>
            </div>

            {/* ------------------- DOB ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="dob" className="col-sm-2 col-form-label">
                DOB
              </label>
              <div className="col-sm-10">
                <input className="form-control" id="dob" type="date" />
              </div>
            </div>

            {/* ------------------- Citizenship ? ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="first_name" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input className="form-control" id="first_name" type="text" />
              </div>
            </div>

            {/* ------------------- Citizenship Number ------------------- */}
            <div className="row mb-3 col-md-12">
              <label htmlFor="first_name" className="col-sm-2 col-form-label">
                First Name
              </label>

              <div className="col-sm-10">
                <input className="form-control" id="first_name" type="text" />
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
                <select className="form-select">
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
                <select className="form-select">
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
                <select className="form-select">
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
                <select className="form-select">
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
                <select className="form-select">
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
              onClick={() => {}}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
