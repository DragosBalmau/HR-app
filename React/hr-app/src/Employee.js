import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddEmployeeModal } from './AddEmployeeModal';
import { EditEmployeeModal } from './EditEmployeeModal';

export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = { employees: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ employees: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteEmployee(employeeid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'employee/' + employeeid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { employees, employeeid, employeefirstname, employeelastname, employeebirthday, employeemail, employeerole, employeeteam, employeemanager } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Employee id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Birthday date</th>
                            <th>Email</th>
                            <th>Team</th>
                            <th>Role</th>
                            <th>Manager</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.Id}>
                                <td>{employee.Id}</td>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.DateOfBirthday}</td>
                                <td>{employee.Email}</td>
                                <td>{employee.Role}</td>
                                <td>{employee.Team}</td>
                                <td>{employee.Manager}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                employeeid: employee.Id,
                                                employeefirstname: employee.FirstName,
                                                employeelastname: employee.LastName,
                                                employeebirthday: employee.DateOfBirthday,
                                                employeemail: employee.Email,
                                                employeerole: employee.Role,
                                                employeeteam: employee.Team,
                                                employeemanager: employee.Manager,
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteEmployee(employee.Id)}>
                                            Delete
                                        </Button>

                                        <EditEmployeeModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            employeeid={employeeid}
                                            employeefirstname={employeefirstname}
                                            employeelastname={employeelastname}
                                            employeebirthday={employeebirthday}
                                            employeemail={employeemail}
                                            employeerole={employeerole}
                                            employeeteam={employeeteam}
                                            employeemanager={employeemanager} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Employee</Button>

                    <AddEmployeeModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}