import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

// action types
const SHOW_MODAL = "base/SHOW_MODAL";
const HIDE_MODAL = "base/HIDE_MODAL";

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// initial state
const initialState = Map({
    // 모달의 가시성 상태
    modal: Map({
        share: false    // 공유 폴더 초대 모달
    })
});

// reducer
export default handleActions({
    [SHOW_MODAL]: (state, action) => {
        const { payload: modalName } = action;
        return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
        const { payload: modalName } = action;
        return state.setIn(['modal', modalName], false);
    }
}, initialState);
