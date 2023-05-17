import React, { useReducer } from "react";

interface ModalState {
  isShowing: boolean;
}

enum Action {
  CLOSE_MODAL,
  OPEN_MODAL,
}

const initialState = { isShowing: false };

const toggleModal = (state: ModalState, action: Action) => {
  switch (action) {
    case Action.CLOSE_MODAL:
      return { isShowing: false };
    case Action.OPEN_MODAL:
      return { isShowing: true };
    default:
      return state;
  }
};

const Modal = () => {
  const [state, dispatch] = useReducer(toggleModal, initialState);

  return (
    <div>
      <h1>{state.isShowing ? "Showing Modal" : "Modal Closed"}</h1>
      <button onClick={() => dispatch(Action.CLOSE_MODAL)}>close modal</button>
      <button onClick={() => dispatch(Action.OPEN_MODAL)}>open modal</button>
    </div>
  );
};

export { Modal };
