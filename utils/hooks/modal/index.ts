import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../modules/actions/modal";
import { ReducerType } from "../../../modules/reducers";

const useModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerType) => state.modal);

  const setState = {
    modalOn: (payload: string) => {
      dispatch(actions.modalOn(payload));
    },
    modalOff: (payload: string) => {
      dispatch(actions.modalOff(payload));
    },
  };

  return { state, setState };
};

export default useModal;
