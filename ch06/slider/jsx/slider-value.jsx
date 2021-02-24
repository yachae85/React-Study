class SliderValue extends React.Component{
    constructor(props) {
        super(props)
        this.handleSlide = this.handleSlide.bind(this)
        this.state = {slideValue: 0}
    }
    handleSlide(event) {
        this.setState({slideValue: event.detail.ui.value})
    }
    componentDidMount() {
        window.addEventListener('slide', this.handleSlide)
    }
    componentWillUnmount() {
        window.removeEventListener('slide', this.handleSlide)
    }
    render() {
        return <div className="">
            Value: {this.state.slideValue}
        </div>
    }
}