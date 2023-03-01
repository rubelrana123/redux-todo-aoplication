import { findByAltText } from '@testing-library/react';
import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';
export const rootReducer = ({
    todos : todosReducer,
    filter : filterReducer
})