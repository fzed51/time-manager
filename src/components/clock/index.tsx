import * as React from "react";

interface iClockProps {}

interface iClockState {
  time: string;
}

export class Clock extends React.Component<iClockProps, iClockState> {
  private interval: any;

  constructor(props: iClockProps) {
    super(props);
    this.state = {
      time: this.getTime()
    };
  }

  getTime() {
    const d = new Date();
    return d.toLocaleTimeString();
  }

  tick() {
    this.setState({
      time: this.getTime()
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    const digits: string[] = time.split("");

    const style: React.CSSProperties = {
      width: "100%",
      fontFamily: "sans-serif",
      fontSize: "calc( 100vw / 8 )",
      textAlign: "center",
      fontVariantNumeric: "tabular-nums"
    };
    const style_digit: React.CSSProperties = {
      display: "inline-block",
      width: "0.8em",
      backgroundColor: "#222",
      color: "#eee",
      borderRadius: "0.07em",
      border: "2px solid #fff"
    };

    return (
      <div className="clock" style={style}>
        {digits.map((digit, i) => (
          <span key={"digit-" + i} style={style_digit}>
            {digit}
          </span>
        ))}
      </div>
    );
  }
}
