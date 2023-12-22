import { Dimensions } from "react-native";

function getViewportUnits(): any {
    const { width, height } = Dimensions.get("window")

    return {
        vw: width / 100,
        vh: height / 100,
        vmin: Math.min(width / 100, height / 100),
        vheight: Math.min(width / 100, height / 100),
    }
}

export { getViewportUnits }