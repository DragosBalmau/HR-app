import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddRoleModal } from './AddRoleModal';
import { EditRoleModal } from './EditRoleModal';

export class Role extends Component {

    constructor(props) {
        super(props);
        this.state = { roles: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'role')
            .then(response => response.json())
            .then(data => {
                this.setState({ roles: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteRole(roleid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'role/' + roleid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { roles, roleid, rolename, roledate } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Role id</th>
                            <th>Role name</th>
                            <th>Role date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map(role =>
                            <tr key={role.Id}>
                                <td>{role.Id}</td>
                                <td>{role.Name}</td>
                                <td>{role.DateOfCreation}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                roleid: role.Id, rolename: role.Name, roledate: role.DateOfCreation
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteRole(role.Id)}>
                                            Delete
                                        </Button>

                                        <EditRoleModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            roleid={roleid}
                                            rolename={rolename}
                                            roledate={roledate} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Role</Button>

                    <AddRoleModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}