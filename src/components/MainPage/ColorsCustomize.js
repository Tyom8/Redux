import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor, textColor } from "../../store/actions/ColorsActions";

function ColorsCustomize({width,widthMain}) {
  const [boolean, setBoolean] = useState(false)
  const backColorRef = useRef();
  const textColorRef = useRef();
  const dispatch = useDispatch();

  const backColorFn = useCallback(() => {
    dispatch(changeColor(backColorRef.current.value))
  }, [backColorRef]);

  const textColorFn = useCallback(() => {
    dispatch(textColor(textColorRef.current.value))
  },[textColorRef])

  const openClicker = useCallback(() => {
    setBoolean(true)
  }, [boolean])

  const closeClicker = useCallback(() => {
    setBoolean(false)
  }, [boolean])
  return (
    <div>
      <div className="text-Customize" style={{
        width: width
      }}>
        <span onMouseOver={openClicker}>Customize colors to your liking..</span>
      </div>
      {
        boolean && <div className="Customize-Panel" onMouseOver={openClicker} 
        onMouseOut={closeClicker} style={{
          width: widthMain
        }}>
          <form className="customize-Form">
            <label>Page BackgrounColor: </label>
            <input ref={backColorRef} type='color' onChange={backColorFn}></input>
            <label>Text Color: </label>
            <input ref={textColorRef} type='color' onChange={textColorFn}></input>
          </form>
        </div>
      }
    </div>
  )
}

export default ColorsCustomize;