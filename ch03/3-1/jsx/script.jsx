class HelloWorld extends React.Component {
    render () {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(
    <div>
        <HelloWorld/>
        <br/>
        <a href="http://www.naver.com">네이버 바로가기</a>
    </div>,
    document.getElementById('content')
)