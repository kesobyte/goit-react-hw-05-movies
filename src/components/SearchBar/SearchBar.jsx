import propTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import { DebounceInput } from 'react-debounce-input';
import css from './SearchBar.module.css';

export const SearchBar = ({ onChange, value }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className={css.inputWrapper}>
      <DebounceInput
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search movies..."
        minLength={2}
        debounceTimeout={500}
      />
      <HiSearch className={css.icon} />
    </div>
  );
};

SearchBar.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
