import { useContext } from "react"
import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD";

const FunctionContextC = () => {

    const {bkgC} = useContext(ColorTheme);

    return (
        <div>
            <h1 style={{ color: bkgC }}>
                Contexto C
                <FunctionContextD />
            </h1>
        </div>
    )


}

export default FunctionContextC