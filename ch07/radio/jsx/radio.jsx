class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={
            defaultValue: "default value",
            textareaValue: "",
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            selectedValue: "node"
        }
    }
    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }
    handleCheckbox(event) {
        let obj = this.state.checkboxGroup
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }
    handleChange(event) {
        this.setState({textareaValue: event.target.value})
        console.log('onChange event: ', event.target.value, event.target.checked)
        console.log(this.state.textareaValue)
    }
    handleSelectedChange(event) {
        this.setState({selectedValue: event.target.value})
    }
    handleSubmit() {
        fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
        .then(response => {response.json()})
        .then(data => {console.log('Submitted: ', data)})
    }
    render() {
        return <div>
            <form>
                <h2>input: radio</h2>
                <label>
                <input type="radio"
                name="radioGroup"
                value='angular'
                checked={this.state.radioGroup['angular']}
                onChange={this.handleRadio} />
                augular</label>
                <label>
                <input type="radio"
                name="radioGroup"
                value='react'
                checked={this.state.radioGroup['react']}
                onChange={this.handleRadio} />
                react</label>
                <label>
                <input type="radio"
                name="radioGroup"
                value='polymer'
                checked={this.state.radioGroup['angulpolymerar']}
                onChange={this.handleRadio} />
                polymer</label>
                <hr/>
                <h2>input: checkbox</h2>
                <label>
                <input type="checkbox"
                    name="checkboxGroup"
                    value='node'
                    checked={this.state.checkboxGroup['node']}
                    onChange={this.handleCheckbox} />
                node
                </label>
                <label>
                <input type="checkbox"
                    name="checkboxGroup"
                    value='react'
                    checked={this.state.checkboxGroup['react']}
                    onChange={this.handleCheckbox} />
                react
                </label>
                <label>
                <input type="checkbox"
                    name="checkboxGroup"
                    value='express'
                    checked={this.state.checkboxGroup['express']}
                    onChange={this.handleCheckbox} />
                express
                </label>
                <label>
                <input type="checkbox"
                    name="checkboxGroup"
                    value='mongodb'
                    checked={this.state.checkboxGroup['mongodb']}
                    onChange={this.handleCheckbox} />
                mongodb
                </label>
                <hr/>
                <h2>textarea</h2>
                <textarea placeholder={this.state.defaultValue} onChange={this.handleChange} value={this.state.textareaValue} />
                <hr/>
                <h2>select option</h2>
                <select
                    value={this.state.selectedValue}
                    onChange={this.handleSelectedChange}>
                    <option value="ruby">Ruby</option>
                    <option value="node">Node</option>
                    <option value="python">Python</option>
                </select>
                <hr/>
                <h2>select multiple</h2>
                <select multiple={true} defaultValue={['metro', 'react']}>
                    <option value="metro">Metro</option>
                    <option value="react">React</option>
                    <option value="jQuery">jQuery</option>
                </select>
                <hr/>
                <h2>submit</h2>
                <input type="button" onClick={this.handleSubmit}
                    value="Submit"/>
            </form>
        </div>
    }
}

ReactDOM.render(
    <Content data-url="http://webapplog.com"/>,
    document.getElementById('content')
)