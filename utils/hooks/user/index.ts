import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../modules/actions/user";
import { userInfo } from "../../../modules/actions/user/interface";
import { ReducerType } from "../../../modules/reducers";

const useUser = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerType) => state.user);

  const setState = {
    setUserInfo: (payload: userInfo) => {
      dispatch(actions.setUserInfo(payload));
    },
  };

  return { state, setState };
};

export default useUser;
