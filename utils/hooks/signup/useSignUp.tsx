import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../modules/actions/signup";
import { ReducerType } from "../../../modules/reducers";

const useSignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerType) => state.signup);
  const setState = {
    changeEmailErrorText: (payload: string) => {
      dispatch(actions.changeEmailErrorText(payload));
    },
    changeNicknameErrorText: (payload: string) => {
      dispatch(actions.changeNicknameErrorText(payload));
    },
    changePasswordErrorText: (payload: string) => {
      dispatch(actions.changePasswordErrorText(payload));
    },
    changePasswordConfirmErrorText: (payload: string) => {
      dispatch(actions.changePasswordConfirmErrorText(payload));
    },
  };

  return { state, setState };
};

export default useSignUp;
