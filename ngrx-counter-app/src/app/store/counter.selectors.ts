import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from './counter.reducer';

// Feature selector (if you have multiple feature states)
export const selectCounterState = createFeatureSelector<State>('counter');

// Simple selector to get the count 
export const selectCount = createSelector(
    selectCounterState,
    (state: State) => state.count
);
    
