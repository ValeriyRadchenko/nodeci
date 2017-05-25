import * as React from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { push } from 'react-router-redux';
import '../assets/styles/dashboardPage.scss';


const Dashboard = ({ list, goTo }: any) => (
  <Row>
    <Col md={3} className='left-control-menu'>
      <Button className='btn-raised' onClick={() => goTo('create')}>Create item</Button>
      <Button className='btn-raised' onClick={() => goTo('people')}>People</Button>
      <Button className='btn-raised' onClick={() => goTo('history')}>Assembles history</Button>
      <Button className='btn-raised' onClick={() => goTo('settings')}>Settings</Button>
    </Col>
    <Col md={9} className='list-container'>
      <Table hover striped>
        <thead>
          <tr>
            <th>S</th>
            <th>W</th>
            <th>Name</th>
            <th>Last success</th>
            <th>Last fail</th>
            <th>Last duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((el: any, i: number) => (<tr key={i} onClick={() => goTo(`/${encodeURIComponent(el.name)}/configure`)}>
            <td>+</td>
            <td>+</td>
            <td>{el.name}</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td><Button bsStyle='primary' className='assemble-trigger'>Assemble</Button></td>
          </tr>))}
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default connect(
  ({
    project: { list },
  }) => ({
    list,
  }),
  dispatch => ({
    goTo: path => dispatch(push(path))
  })
)(Dashboard);
