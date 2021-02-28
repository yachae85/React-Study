class Content extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "content" },
            this.props.children
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Content,
        null,
        React.createElement(
            "h1",
            null,
            "React"
        ),
        React.createElement(
            "p",
            null,
            "Rocks"
        )
    ),
    React.createElement(
        Content,
        null,
        React.createElement("img", { src: "img/\uC544\uC774\uC720.jpg" })
    ),
    React.createElement(
        Content,
        null,
        React.createElement(
            "a",
            { href: "http://www.naver.com" },
            "\uB124\uC774\uBC84 \uBC14\uB85C\uAC00\uAE30"
        )
    )
), document.getElementById('content'));
