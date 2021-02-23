class Content extends React.Component {
    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this))
    }
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    render() {
        return React.createElement('div', null)
    }
}

ReactDOM.render(
    React.createElement(Content, null),
    document.getElementById('content')
)