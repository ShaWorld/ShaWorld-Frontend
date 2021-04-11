import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../modules/actions/search";
import { ReducerType } from "../../../modules/reducers";

const useSearch = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerType) => state.search);

  const setState = {
    setKeyword: (payload: string) => {
      dispatch(actions.setKeyword(payload));
    },
  };

  return { state, setState };
};

export default useSearch;
