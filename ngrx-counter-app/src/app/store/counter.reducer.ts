import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";


export interface State {
    count: number;
}

export const initialState: State = {
    count: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, (state) => ({ ...state, count:0 }))

)