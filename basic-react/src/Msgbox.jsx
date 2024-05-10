// eslint-disable-next-line react/prop-types
function Msgbox({username,textcolor}) {
    let styles={color:textcolor};
    return(
        <>
        <h4 style={styles}>Hello {username}</h4>
        </>
    )
}
export default Msgbox;