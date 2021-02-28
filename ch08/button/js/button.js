class Button extends React.Component {
    render() {
        return React.createElement(
            'button',
            { className: 'btn' },
            this.props.buttonLabel
        );
    }
}

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.string,
    email(props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!emailRegularExpression.test(props[propName])) {
            return new Error('Email validation failed!');
        }
    }
};

Button.defaultProps = { buttonLabel: 'Submit' };

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Button, { buttonLabel: 'Start' }),
    React.createElement(Button, null),
    React.createElement(Button, { title: 1 }),
    React.createElement(Button, null),
    React.createElement(Button, { email: 'not-a-valid-email' }),
    React.createElement(Button, { email: 'hi@azat.co' })
), document.getElementById('content'));
