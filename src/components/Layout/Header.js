import { Fragment } from 'react';
import meals from '../../assets/meals.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
  return (
   <Fragment>
      <header className={classes.header}>
        <h1> Meals </h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={meals}  alt="meals"/> 
      </div>
      console.log'meals';
    </Fragment>
  );
};

export default Header;
