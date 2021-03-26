import { MODAL_ON, MODAL_OFF } from "./interface";

const modalOn = (payload: string) => ({
  type: MODAL_ON,
  payload,
});
const modalOff = (payload: string) => ({
  type: MODAL_OFF,
  payload,
});

export const actions = {
  modalOn,
  modalOff,
};

export type ActionType =
  | ReturnType<typeof modalOn>
  | ReturnType<typeof modalOff>;
