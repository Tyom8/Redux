import exit from "./photos/exit_icon-icons.com_70975.png";

export default ({setToken}) => {
    return (
        <div className="Header">
        <div className="quit-Div"></div>
        <div className="bounce">
            <div className="text"><h1>Instagram</h1></div>
        </div>
        <div className="quit-Div" onClick={() => {
            setToken(localStorage.removeItem("token"))
        }}>
            <img className="exit" src={exit} alt="exit"></img>
            <h3 className="quit">Quit</h3>
        </div>
    </div>
    )
}