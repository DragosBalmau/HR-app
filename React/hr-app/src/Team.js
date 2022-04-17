import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddTeamModal } from './AddTeamModal';
import { EditTeamModal } from './EditTeamModal';

export class Team extends Component {

    constructor(props) {
        super(props);
        this.state = { teams: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'team')
            .then(response => response.json())
            .then(data => {
                this.setState({ teams: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeam(teamid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'team/' + teamid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { teams, teamid, teamname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Team id</th>
                            <th>Team name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map(team =>
                            <tr key={team.Id}>
                                <td>{team.Id}</td>
                                <td>{team.Name}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                teamid: team.Id, teamname: team.Name
                                            })}>
                                            Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeam(team.Id)}>
                                            Delete
                                        </Button>

                                        <EditTeamModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            teamid={teamid}
                                            teamname={teamname} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Team</Button>

                    <AddTeamModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}