import * as React from "react";

type PomodoroStatut = "START" | "WAIT" | "STOP";

export interface iPomodoroProps {
  length: number;
  status: PomodoroStatut;
}

interface iPomodoroState {
  remaining: number;
}

export class Pomodoro extends React.Component<
  iPomodoroProps,
  iPomodoroState
> {
  private interval: any;
  constructor(props: iPomodoroProps) {
    super(props);
    this.state = {
      remaining: this.props.length * 60,
    };
  }

  render() {
      const emojiPlay: string = '▶';
      const emojiPause: string = '⏸';
      const emojiStop: string = '⏹';
    return <div>Pomodoro</div>;
  }
}
