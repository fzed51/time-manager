import * as React from "react";

/**
 * Pour jour une alerte :
 * https://medium.com/@jerrysbusiness/playing-a-sound-file-in-a-react-project-bd0ad079ad93
 */

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
