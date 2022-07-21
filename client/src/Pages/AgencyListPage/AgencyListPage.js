import React, { useState } from 'react'
import { Dropdown, Table } from 'react-bootstrap'






function AgencyListPage() {
    var agencyTypes = ["Addictions"
        , "Adoptions"
        , "Aged Care"
        , "Alcohol & amp; Drug"
        , "Athletics"
        , "Carers"
        , "Child Intervention"
        , "Children"
        , "Chiropractic Office"
        , "Coaching"
        , "Community"
        , "Correctional"
        , "Counselling"
        , "Court"
        , "Crisis Support"
        , "Disability"
        , "Domestic Violence"
        , "Education"
        , "Employment"
        , "Ethnic"
        , "Family"
        , "Fitness Center"
        , "Grief"
        , "Health"
        , "Homeless"
        , "Housing"
        , "Indigenous"
        , "International"
        , "Law"
        , "Mediation"
        , "Mental Health"
        , "Occupational Therapy"
        , "Offenders"
        , "Other"
        , "P - 12"
        , "Palliative Care"
        , "Personal Training"
        , "Physical Therapy"
        , "Policy"
        , "Primary School"
        , "Private"
        , "Prosthetics and Orthotics"
        , "Public"
        , "Recreation Center - Collegiate"
        , "Refugee"
        , "Rehabilitation"
        , "Research Lab"
        , "Secondary School"
        , "Sexual Assault"
        , "Shadowing PA"
        , "Shadowing Physician"
        , "Social Action"
        , "Special Population"
        , "Strength and Conditioning"
        , "TAFE"
        , "Veterans"
        , "Violence"
        , "Welfare"
        , "Wellness"
        , "Women"
        , "Womens Advocacy"
        , "Youth"]
    var types = {
        all: "ALL",
        pending: "PENDING",
        approved: "APPROVED",
    }

    var agencies = [
        {
            id: "1",
            name: "Agency 1",
            about: "This is agency 1",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
        {
            id: "2",
            name: "Agency 2",
            about: "This is agency 2",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
        {
            id: "3",
            name: "Agency 3",
            about: "This is agency 3",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
    ]

    const [listType, setListType] = useState(types.all)


    const [agencyList, setAgencyList] = useState([
        {
            id: "1",
            name: "Agency 1",
            about: "This is agency 1",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
        {
            id: "2",
            name: "Agency 2",
            about: "This is agency 2",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
        {
            id: "3",
            name: "Agency 3",
            about: "This is agency 3",
            agencyType: "", //Addictions
            ein: "",
            website: "",
            disciplines: ["School of Social Work-Grad", "School of Social Work-Undergrad"],
            typeOfPlacement: "",
            phone: "",
            fax: "",
            email: "",
            businessAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            mailingAddress: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            },
            preferredContact: ["email", "phone"],
            agent: {
                title: "", // Associate Professor, Dr, Father, Mr, Mrs, Miss, Ms, Prodessor, Reverand
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                fax: "",
                email: "",
            },
            requestDate: Date.now(),
            isApproved: false,
        },
    ])


    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <h4>AGENCIES</h4>
            </div>
            <div className='d-flex justify-content-end'>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {listType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {[types.all, types.approved, types.pending].map((item) => {
                            return <Dropdown.Item
                                onClick={() => {
                                    setListType(item)
                                    if (item == types.all) {
                                        setAgencyList(agencies)
                                    } else if (item == types.approved) {
                                        setAgencyList(agencies.filter((item) => item.isApproved))
                                    } else {
                                        setAgencyList(agencies.filter((item) => item.isApproved == false))
                                    }
                                }}>{item}
                            </Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Table striped bordered hover style={{ margin: "30px" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Agency Name</th>
                        <th>About</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {agencyList.map((item, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.about}</td>
                            <td>{item.isApproved ? "approved" : "pending"}</td>
                            <td><button className='btn btn-primary'>Detail</button></td>
                        </tr>
                    })}

                </tbody>
            </Table>





        </div>
    )
}

export default AgencyListPage