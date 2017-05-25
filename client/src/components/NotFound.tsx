import * as React from 'react';

interface MyProps {}
interface MyState {}

export default class NotFound extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div>
        <h2>404 Houston we have a problem</h2>
        <p>We cant seem to find what you're looking for</p>
      </div>
    );
  }
}
