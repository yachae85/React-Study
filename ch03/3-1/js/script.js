class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            "Hello World"
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement("br", null),
    React.createElement(
        "a",
        { href: "http://www.naver.com" },
        "\uB124\uC774\uBC84 \uBC14\uB85C\uAC00\uAE30"
    )
), document.getElementById('content'));
