class Content extends React.Component{
    render() {
        return <div className='content'>
            {this.props.children}
        </div>
    }
}

ReactDOM.render(
    <div>
        <Content>
            <h1>React</h1>
            <p>Rocks</p>
        </Content>
        <Content>
            <img src="img/아이유.jpg"/>
        </Content>
        <Content>
            <a href="http://www.naver.com">네이버 바로가기</a>
        </Content>
    </div>,
    document.getElementById('content')
)