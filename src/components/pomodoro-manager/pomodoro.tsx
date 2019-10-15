import * as React from "react";

import beepMp3 from "./beep-01a.mp3";

type PomodoroStatut = "START" | "WAIT" | "STOP";

export interface iPomodoroProps {
  length: number;
}

interface iPomodoroState {
  remaining: number;
}

interface iTime {
  h: string;
  m: string;
  s: string;
}

export class Pomodoro extends React.Component<iPomodoroProps, iPomodoroState> {
  private interval: any;
  constructor(props: iPomodoroProps) {
    super(props);
    this.state = {
      remaining: this.props.length * 60
    };
  }

  decompte(remaining: number) {
    const s = remaining % 60;
    const remainingMinute = Math.floor(remaining / 60);
    const m = remainingMinute % 60;
    const h = Math.floor(remainingMinute / 60);
    return {
      s: ("00" + s).substr(-2),
      m: ("00" + m).substr(-2),
      h: "" + h
    };
  }

  tick() {
    let { remaining } = this.state;
    remaining--;
    if (remaining === 0) {
      clearInterval(this.interval);
      const audio = document.createElement("audio");
      audio.src = beepMp3;
      audio.play()
    }
    this.setState({ remaining });
  }

  setStatus(status: PomodoroStatut) {
    return () => {
      switch (status) {
        case "START":
          this.interval = setInterval(() => this.tick(), 1000);
          break;
        case "WAIT":
          clearInterval(this.interval);
          break;
        case "STOP":
          clearInterval(this.interval);
          this.setState({ remaining: this.props.length * 60 });
          break;
      }
    };
  }

  render() {
    const emojiPlay: string = "play";
    const emojiPause: string = "pause";
    const emojiStop: string = "stop";
    const decompte = this.decompte(this.state.remaining);
    return (
      <div>
        Pomodoro {this.props.length}
        <div>
          {decompte.h}:{decompte.m}:{decompte.s}
        </div>
        <div>
          <button onClick={this.setStatus("START")}>{emojiPlay}</button>
          <button onClick={this.setStatus("WAIT")}>{emojiPause}</button>
          <button onClick={this.setStatus("STOP")}>{emojiStop}</button>
        </div>
      </div>
    );
  }
}
