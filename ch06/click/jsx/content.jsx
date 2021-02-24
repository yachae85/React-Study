class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClicks(event) {
        this.setState({count: ++this.state.count})
    }
    render() {
        return (
            <div>
                <ClickCounterButton handler={this.handleClicks.bind(this)}/>
                <br/>
                <Count value={this.state.count} />
            </div>
        )
    }
}

class ClickCounterButton extends React.Component {
    render() {
        return <button
            onClick={this.props.handler}>
                Don`t touch me with your dirty hands!)
            </button>
    }
}

class Count extends React.Component {
    render() {
        return <span>Clicked {this.props.value}</span>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
)