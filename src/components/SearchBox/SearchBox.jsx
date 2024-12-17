import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          value={filter}
          placeholder="Search contacts"
        />
      </label>
    </div>
  );
};

export default SearchBox;