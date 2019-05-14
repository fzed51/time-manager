import * as React from "react";
import { Alert } from "./alert";
import { Pomodoro, iPomodoroProps } from "./pomodoro";

interface iPomodoroManagerProps {}

interface iPomodoroManagerState {
  lengths: number[];
  currentPomodoro?: iPomodoroProps;
}

export class PomodoroManager extends React.Component<
  iPomodoroManagerProps,
  iPomodoroManagerState
> {
  constructor(props: iPomodoroManagerProps) {
    super(props);
    this.state = {
        lengths:[25, 5, 15]
    };
  }

  render() {
    return (
      <div>
        <Alert />
        {this.state.currentPomodoro && (
          <Pomodoro {...this.state.currentPomodoro} />
        )}
        <div>
          {this.state.lengths.map(length => {
              return(
                  <button >{length} min</button>
              )
          })}
        </div>
      </div>
    );
  }
}
