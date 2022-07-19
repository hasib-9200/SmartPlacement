import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'



var agencies = [
    {
        id: "1",
        title: "Agency 1",
        bio: "This is agency 1",
        requestDate: Date.now(),
        isApproved: false,
    },
    {
        id: "2",
        title: "Agency 2",
        bio: "This is agency 2",
        requestDate: Date.now(),
        isApproved: false,
    },
    {
        id: "3",
        title: "Agency 3",
        bio: "This is agency 3",
        requestDate: Date.now(),
        isApproved: true,
    },
]

function AgencyListPage() {
    var types = {
        all: "ALL",
        pending: "PENDING",
        approved: "APPROVED",
    }
    const [listType, setListType] = useState(types.all)


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
                                }}>{item}
                            </Dropdown.Item>
                        })}


                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default AgencyListPage