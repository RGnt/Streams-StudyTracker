import {combineReducers} from '@reduxjs/toolkit';
import sectionReducer from './SectionSlice'

export default combineReducers({
    section: sectionReducer
});