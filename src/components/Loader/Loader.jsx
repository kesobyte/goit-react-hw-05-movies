import css from './Loader.module.css';
import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#5046e5"
        secondaryColor="#5046e5"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
