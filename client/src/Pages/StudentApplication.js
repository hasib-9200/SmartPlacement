import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
const StudentApplication = () => {
  const hover = (e) => {
    e.target.style.background = "#205eb9";
  };

  const hoverStop = (e) => {
    e.target.style.background = "#0d6efd";
  };
  const [formValue, setFormValue] = useState({
    preferred_contacts: [
      { title: "Email", checked: false },
      { title: "Fax", checked: false },
      { title: "Phone", checked: false },
      { title: "SMS", checked: false },
    ],
  });

  const submitApplication = (e) => {
    e.preventDefault();
    axios.post("/studapplication", formValue).then((response) => {
      console.log(response);
    });
  };

  const onFormChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  var agencyTypes = [
    "Addictions",
    "Adoptions",
    "Aged Care",
    "Alcohol & amp; Drug",
    "Athletics",
    "Carers",
    "Child Intervention",
    "Children",
    "Chiropractic Office",
    "Coaching",
    "Community",
    "Correctional",
    "Counselling",
    "Court",
    "Crisis Support",
    "Disability",
    "Domestic Violence",
    "Education",
    "Employment",
    "Ethnic",
    "Family",
    "Fitness Center",
    "Grief",
    "Health",
    "Homeless",
    "Housing",
    "Indigenous",
    "International",
    "Law",
    "Mediation",
    "Mental Health",
    "Occupational Therapy",
    "Offenders",
    "Other",
    "P - 12",
    "Palliative Care",
    "Personal Training",
    "Physical Therapy",
    "Policy",
    "Primary School",
    "Private",
    "Prosthetics and Orthotics",
    "Public",
    "Recreation Center - Collegiate",
    "Refugee",
    "Rehabilitation",
    "Research Lab",
    "Secondary School",
    "Sexual Assault",
    "Shadowing PA",
    "Shadowing Physician",
    "Social Action",
    "Special Population",
    "Strength and Conditioning",
    "TAFE",
    "Veterans",
    "Violence",
    "Welfare",
    "Wellness",
    "Women",
    "Womens Advocacy",
    "Youth",
  ];
  var titles = [
    "Associate Professor",
    "Dr",
    "Father",
    "Miss",
    "Mr",
    "Mrs",
    "Ms",
    "Professor",
    "Reverend",
  ];
  var states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  var level_of_class = ["BSW", "MSW"];
  var isSubmitted = localStorage.getItem("isSubmitted");
  var isTrueSet = false;
  isTrueSet = isSubmitted === "true";
  if (!isTrueSet) {
    return <Redirect to="/" />;
  }
  const placementApplication = () => {
    window.location.href = "/StudentApplication";
  };
  const accountActivation = () => {
    window.location.href = "/AgencyAccountRequest";
  };
  const signOut = () => {
    window.location.href = "/";
    localStorage.setItem("isSubmitted", false);
  };
  return (
    <div>
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-people"
          viewBox="0 0 16 16"
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
        Smart Placement
      </h1>

      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Homepage">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">
                  Status
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">
                  Requirements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">
                  Records
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">
                  Attachments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">
                  Profile
                </a>
              </li>
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Default Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={placementApplication}>
                    Apply for Placement
                  </Dropdown.Item>
                  <Dropdown.Item onClick={accountActivation}>
                    Apply for getting account
                  </Dropdown.Item>
                  <Dropdown.Item href="#">Request For students</Dropdown.Item>
                  <Dropdown.Item href="#">
                    See the application process
                  </Dropdown.Item>
                  <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: "white", border: "2px solid white" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <div className="mb-3"></div>
        <div
          class="container form-horizontal col-sm-5 w-30"
          style={{ textAlign: "Left", color: "rgb(14, 189, 248)" }}
        >
          <div className="mb-3"></div>
          <div>
            <h3>Apply for Placement process</h3>
            <p>
              ...............................................................
            </p>
          </div>
          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Title </label>
            <div class="col-sm-7">
              <Dropdown className="d-inline mx-6 w-75 col-sm-5">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  {formValue.stud_title == null
                    ? "Title"
                    : formValue.stud_title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {titles.map((item) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          setFormValue({
                            ...formValue,
                            stud_title: item,
                          });
                        }}
                      >
                        {item}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="mb-3"></div>
          <form>
            <div class="form-group row">
              <label for="fname" class="col-sm-5 col-form-label">
                First Name
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="First Name"
                  name="stud_fname"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="lname" class="col-sm-5 col-form-label">
                Last Name
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Last Name"
                  name="stud_lname"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="stdid" class="col-sm-5 col-form-label">
                Student Id
              </label>
              <div class="col-sm-5">
                <input
                  type="Number"
                  class="form-control"
                  id="stdid"
                  placeholder="Student Id"
                  name="stud_id"
                  onChange={onFormChange}
                />
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="firstpriority" class="col-sm-5 col-form-label">
                Registered Course
              </label>

              <div class="col-sm-5">
                <Dropdown className="d-inline mx-6 w-75 col-sm-5">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    {formValue.registered_level == null
                      ? "Which course are you registered?"
                      : formValue.registered_level}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {level_of_class.map((item) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            setFormValue({
                              ...formValue,
                              registered_level: item,
                            });
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="Hphone" class="col-sm-5 col-form-label">
                Home Phone
              </label>
              <div class="col-sm-5">
                <input
                  type="Number"
                  class="form-control"
                  id="Hphone"
                  placeholder="Home Phone"
                  name="stud_homephone"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="Mphone" class="col-sm-5 col-form-label">
                Mobile Number
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="Mphone"
                  placeholder="Mobile Number "
                  name="stud_mobilephone"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="Email" class="col-sm-5 col-form-label">
                Email address
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="Email"
                  placeholder="Email address"
                  name="stud_email"
                  onChange={onFormChange}
                />
              </div>
            </div>

            <div className="mb-3"></div>

            <h5>Mailing Address</h5>

            <div class="form-group row">
              <label for="Unum" class="col-sm-5 col-form-label">
                Unit number
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="Unum"
                  name="stud_unit"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="Stname" class="col-sm-5 col-form-label">
                Street Number and Name
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="Stname"
                  name="stud_street"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="ccity" class="col-sm-5 col-form-label">
                City
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="ccity"
                  placeholder="City"
                  name="stud_city"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="Sstate" class="col-sm-5 col-form-label">
                State
              </label>
              <div class="col-sm-5">
                <Dropdown className="d-inline mx-6 w-75 col-sm-5">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    {formValue.stud_state == null
                      ? "State"
                      : formValue.stud_state}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {states.map((item) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            setFormValue({
                              ...formValue,
                              stud_state: item,
                            });
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <input
                  type="text"
                  class="form-control"
                  id="Sstate"
                  placeholder="State"
                  name="Sstate"
                /> */}
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="szip" class="col-sm-5 col-form-label">
                Zip code
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="szip"
                  placeholder="Zipcode"
                  name="stud_zipcode"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="scountry" class="col-sm-5 col-form-label">
                Country
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="scountry"
                  placeholder="Country"
                  name="stud_country"
                  onChange={onFormChange}
                />
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="firstpriority" class="col-sm-5 col-form-label">
                Placement type 1
              </label>

              <div class="col-sm-5">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {formValue.agent_type_one == null
                      ? " First prefered type"
                      : formValue.agent_type_one}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {agencyTypes.map((item) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            setFormValue({
                              ...formValue,
                              agent_type_one: item,
                            });
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="firstpriority" class="col-sm-5 col-form-label">
                Placement type 2
              </label>

              <div class="col-sm-5">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {formValue.agent_type_two == null
                      ? "Second prefered type "
                      : formValue.agent_type_two}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {agencyTypes.map((item) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            setFormValue({
                              ...formValue,
                              agent_type_two: item,
                            });
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="firstpriority" class="col-sm-5 col-form-label">
                Placement type 3
              </label>

              <div class="col-sm-5">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {formValue.agent_type_three == null
                      ? "Third prefered type"
                      : formValue.agent_type_three}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {agencyTypes.map((item) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            setFormValue({
                              ...formValue,
                              agent_type_three: item,
                            });
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="mb-3"></div>
            <div class="form-group row">
              <label class="col-sm-5" for="fFile">
                Upload Resume
              </label>
              <div class="col-sm-5">
                <input type="file" class="form-control-file" id="fFile" />
              </div>
            </div>

            <div className="mb-3"></div>
            <div class="form-group row">
              <label for="fname" class="col-sm-5 col-form-label">
                Prefered Contact
              </label>
              <div class="col-sm-5">
                <div class="form-group row col-sm-15 ">
                  {formValue.preferred_contacts.map((item) => {
                    return (
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            onClick={() => {
                              item.checked = !item.checked ? true : false;

                              var contacts = formValue.preferred_contacts;

                              setFormValue({
                                ...formValue,
                                preferred_contacts: contacts,
                              });
                              console.log(formValue);
                            }}
                            className="form-check-input"
                          />
                          {item.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mb-3"></div>
            <center>
              <div class="d-grid col-sm-5 text-center">
                <button
                  onClick={submitApplication}
                  onMouseOver={hover}
                  onMouseLeave={hoverStop}
                  className="btn btn-primary"
                  style={{ background: "#0d6efd", border: "#0d6efd" }}
                >
                  Apply
                </button>
              </div>
            </center>
          </form>
        </div>
        <div className="mb-5"></div>
      </div>
    </div>
  );
};

export default StudentApplication;
