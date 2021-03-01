var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const LoadWebsite = Component => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = { label: 'Run' };
            this.state.handleClick = this.handleClick.bind(this);
        }
        getUrl() {
            return 'http://www.naver.com';
        }
        handleClick(event) {
            document.getElementById('frame').src = this.getUrl();
        }
        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }
        render() {
            console.log(this.state);
            return React.createElement(Component, _extends({}, this.state, this.props));
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent';
    return _LoadWebsite;
};
