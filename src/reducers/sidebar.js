const sidebarReducer = (state = { visible: false }, action) => {
    switch (action.type) {
        case "VISIBLE":
            //return !state
            return { ...state, visible: true }
        case "HIDDEN":
            return { ...state, visible: false }
        default:
            return state;
    }
}
export default sidebarReducer;