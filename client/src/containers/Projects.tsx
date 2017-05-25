import * as React from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';


const Projects = ({ list }: any) => (
  <div>
    <h2>Projects</h2>
    <ul>
      {list.map((el: any, i: number) => <li key={i}>{el.name}</li>)}
    </ul>
  </div>
);

export default connect(
  ({
    project: { list },
  }) => ({
    list,
  }),
)(Projects);
