class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectedChange = this.handleSelectedChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
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
        };
    }
    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }
    handleCheckbox(event) {
        let obj = this.state.checkboxGroup;
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }
    handleChange(event) {
        this.setState({ textareaValue: event.target.value });
        console.log('onChange event: ', event.target.value, event.target.checked);
        console.log(this.state.textareaValue);
    }
    handleSelectedChange(event) {
        this.setState({ selectedValue: event.target.value });
    }
    handleSubmit() {
        fetch(this.props['data-url'], { method: 'POST', body: JSON.stringify(this.state) }).then(response => {
            response.json();
        }).then(data => {
            console.log('Submitted: ', data);
        });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement(
                    "h2",
                    null,
                    "input: radio"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio",
                        name: "radioGroup",
                        value: "angular",
                        checked: this.state.radioGroup['angular'],
                        onChange: this.handleRadio }),
                    "augular"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio",
                        name: "radioGroup",
                        value: "react",
                        checked: this.state.radioGroup['react'],
                        onChange: this.handleRadio }),
                    "react"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio",
                        name: "radioGroup",
                        value: "polymer",
                        checked: this.state.radioGroup['angulpolymerar'],
                        onChange: this.handleRadio }),
                    "polymer"
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "input: checkbox"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox",
                        name: "checkboxGroup",
                        value: "node",
                        checked: this.state.checkboxGroup['node'],
                        onChange: this.handleCheckbox }),
                    "node"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox",
                        name: "checkboxGroup",
                        value: "react",
                        checked: this.state.checkboxGroup['react'],
                        onChange: this.handleCheckbox }),
                    "react"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox",
                        name: "checkboxGroup",
                        value: "express",
                        checked: this.state.checkboxGroup['express'],
                        onChange: this.handleCheckbox }),
                    "express"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox",
                        name: "checkboxGroup",
                        value: "mongodb",
                        checked: this.state.checkboxGroup['mongodb'],
                        onChange: this.handleCheckbox }),
                    "mongodb"
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "textarea"
                ),
                React.createElement("textarea", { placeholder: this.state.defaultValue, onChange: this.handleChange, value: this.state.textareaValue }),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "select option"
                ),
                React.createElement(
                    "select",
                    {
                        value: this.state.selectedValue,
                        onChange: this.handleSelectedChange },
                    React.createElement(
                        "option",
                        { value: "ruby" },
                        "Ruby"
                    ),
                    React.createElement(
                        "option",
                        { value: "node" },
                        "Node"
                    ),
                    React.createElement(
                        "option",
                        { value: "python" },
                        "Python"
                    )
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "select multiple"
                ),
                React.createElement(
                    "select",
                    { multiple: true, defaultValue: ['metro', 'react'] },
                    React.createElement(
                        "option",
                        { value: "metro" },
                        "Metro"
                    ),
                    React.createElement(
                        "option",
                        { value: "react" },
                        "React"
                    ),
                    React.createElement(
                        "option",
                        { value: "jQuery" },
                        "jQuery"
                    )
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "submit"
                ),
                React.createElement("input", { type: "button", onClick: this.handleSubmit,
                    value: "Submit" })
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, { "data-url": "http://webapplog.com" }), document.getElementById('content'));
