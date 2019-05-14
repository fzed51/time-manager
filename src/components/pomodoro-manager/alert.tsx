import * as React from 'react';

interface iAlertProps {}

interface iAlertState {}

export class Alert extends React.Component<iAlertProps, iAlertState> {
  constructor(props: iAlertProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>📣</div>;
  }
}
