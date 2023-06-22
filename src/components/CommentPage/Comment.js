import { useSelector } from "react-redux";
import "./Comment.css"
import NewComments from "./NewComments";
import ColorsCustomize from "../MainPage/ColorsCustomize";

export default () => {
    const comentContent = useSelector(state => state.openCom);
    const pageBackground = useSelector(state => state.changeBackground);
    const textColor = useSelector(state=>state.changeColor);

    return (
        <div className="Com-Page" style={{
            backgroundColor: pageBackground
          }}>
            <div className="panel">
                <ColorsCustomize width="100%"/>
            </div>
            <div className="all-Com-Div">
                <div className="content-Div" style={{
                    backgroundImage: `url(${comentContent.img})`
                }}>
                    <h1 className="com-H1" style={{
                color: textColor
            }}>{comentContent.postTitle}</h1>
                    <span className="com-Span" style={{
                color: textColor
            }}>{comentContent.postBody}</span>
                </div>
                <NewComments/>
            </div>
        </div>
    )
}