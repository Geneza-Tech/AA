export const initialState = null;

export const reducer = (state ,action) => {
    if(action.type === "USER"){
        return action.playload;
    }
    return state;
}