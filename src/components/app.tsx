import * as React from "react";
import { Clock } from "./clock";

interface iAppProps {}

interface iAppState {}

export class App extends React.Component<iAppProps, iAppState> {
  constructor(props: iAppProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="timer-manager">
        <Clock />
      </div>
    );
  }
}
