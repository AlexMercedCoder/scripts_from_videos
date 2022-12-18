import FlexContainer from "../style/FlexContainer"

function Header(props){
    return <>
    <FlexContainer styles={{justifyContent: "center"}}>
        <h1>Title of Website</h1>
    </FlexContainer>
    <FlexContainer className="nav">
        <h2>LOGO</h2>
        <FlexContainer styles={{width: "40%", margin: "3% 0 0 0"}}>
            <div>Link2</div>
            <div>Link2</div>
            <div>Link2</div>

        </FlexContainer>
    </FlexContainer>
    </>
}

export default Header