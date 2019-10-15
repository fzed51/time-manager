import * as React from "react";
import { Alert } from "./alert";
import { Pomodoro, iPomodoroProps } from "./pomodoro";
import { SetupButton } from "./setup-button";
import { number } from "prop-types";

interface iPomodoroManagerProps {}

interface iPomodoroManagerState {
  isSetup: boolean;
  lengths: number[];
  currentPomodoro?: iPomodoroProps;
  nextPomodoro: number;
}

export class PomodoroManager extends React.Component<
  iPomodoroManagerProps,
  iPomodoroManagerState
> {
  constructor(props: iPomodoroManagerProps) {
    super(props);
    this.state = {
      isSetup: false,
      nextPomodoro: 0,
      lengths: [60, 25, 5, 15, 1]
    };
  }

  changeCurentPomodoro(length: number) {
    return () => this.setState({ currentPomodoro: { length } });
  }

  onSetupPomodoro() {
    this.setState({ isSetup: !this.state.isSetup });
  }

  onChangePomodoro(index: number) {
    return (e: React.ChangeEvent) => {
      const value: number = Number(e.target.value);
      const lengths: number[] = this.state.lengths.map((l, i) =>
        i === index ? value : l
      );
      this.setState({ lengths });
    };
  }
  onChangePomodoroNext() {
    return (e: React.ChangeEvent) => {
      const value: number = Number(e.target.value);
      this.setState({ nextPomodoro: value });
    };
  }
  onAddPomodoro() {
    const lengths: number[] = [...this.state.lengths, this.state.nextPomodoro];
    this.setState({ lengths, nextPomodoro: 0 });
  }
  onDeletePomodoro(length) {
    const lengths: number[] = this.state.lengths.filter(
      (a: number, b: number) => {
        a !== b;
      }
    );
    this.setState({ lengths });
  }
  render() {
    return (
      <div>
        <Alert />
        <SetupButton onSetup={() => this.onSetupPomodoro()} />
        {this.state.currentPomodoro && (
          <Pomodoro {...this.state.currentPomodoro} />
        )}
        {this.state.isSetup ? (
          <div>
            {this.state.lengths.map((length: number, i: number) => {
              console.log(length, i);
              return (
                <div key={"pomodoro-" + i}>
                  <input
                    type="text"
                    onChange={this.onChangePomodoro(i)}
                    value={length}
                  />
                  <button onClick={() => this.onDeletePomodoro(length)}>
                    -
                  </button>
                </div>
              );
            })}
            <div key={"pomodoro-next"}>
              <input
                type="text"
                onChange={this.onChangePomodoroNext()}
                value={this.state.nextPomodoro}
              />
              <button onClick={() => this.onAddPomodoro()}>-</button>
            </div>
          </div>
        ) : (
          <div>
            {this.state.lengths.map((length: number, i: number) => {
              return (
                <button
                  key={"btn" + i}
                  onClick={this.changeCurentPomodoro(length)}
                >
                  {length} min
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
