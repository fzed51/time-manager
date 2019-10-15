import * as React from 'react';

interface iSetupButtonProps {
    onSetup: ()=>void;
}

interface iSetupButtonState {}

export class SetupButton extends React.Component<iSetupButtonProps, iSetupButtonState> {
  constructor(props: iSetupButtonProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={()=>this.props.onSetup()}>⚙</button>;
  }
}
