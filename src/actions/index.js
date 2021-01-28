export const visible = () => {
    console.log("visible click")
    return {
        type: "VISIBLE",
        payload: {
            expanded: true
        }
    }
}

export const hidden = () => {
    console.log("hidden click")
    return {
        type: "HIDDEN",
        payload: {
            expanded: false
        }
    }
}