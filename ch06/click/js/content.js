class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClicks(event) {
        this.setState({ count: ++this.state.count });
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ClickCounterButton, { handler: this.handleClicks.bind(this) }),
            React.createElement('br', null),
            React.createElement(Count, { value: this.state.count })
        );
    }
}

class ClickCounterButton extends React.Component {
    render() {
        return React.createElement(
            'button',
            {
                onClick: this.props.handler },
            'Don`t touch me with your dirty hands!)'
        );
    }
}

class Count extends React.Component {
    render() {
        return React.createElement(
            'span',
            null,
            'Clicked ',
            this.props.value
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
