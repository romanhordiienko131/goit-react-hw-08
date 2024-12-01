import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filter/selectors";
import { changeFilter } from "../../redux/filter/slice";

const SearchBox = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span>Find contacts by name or phone number</span>
      <input
        className={s.field}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        value={filter}
        type="text"
      />
    </label>
  );
};

export default SearchBox;
