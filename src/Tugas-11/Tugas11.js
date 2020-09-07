import React, {Component} from 'react';

class ClockTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            countdown: 120,
            showClockTimer: true,
        }
    }

    componentDidMount() {
        this.clockID = setInterval(
            () => this.tickClock(),
            1000
        );
        this.timerID = setInterval(
            () => this.tickTimer(),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.showClockTimer === true) {
            if (this.state.countdown < 0) {
                this.setState({
                    showClockTimer: false
                });
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.clockID);
        clearInterval(this.timerID);
    }

    tickClock() {
        this.setState({
            date: new Date()
        });
    }

    tickTimer() {
        this.setState({
            countdown: this.state.countdown - 1
        });
    }

    render() {
        let h2 = {
            margin: "0 80px",
            padding: "0",
            display: "inline",
            fontWeight: "bolder",
        }
        let divStyle = {
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            border: "1px solid black",
            width: "810px",
            margin: "0 auto",
            padding: "30px 0",
        }
        return(
            <>
                {this.state.showClockTimer && (
                    <div style={divStyle}>
                        <h2 style={h2}>sekarang jam : {this.state.date.toLocaleTimeString()}</h2>
                        <h2 style={h2}>hitung mundur: {this.state.countdown}</h2>
                    </div>
                )}
            </>
        )
    }
}

class Tugas11 extends Component {
    render() {
        return(
            <>
                <ClockTimer />
            </>
        )
    }
}

export default Tugas11;