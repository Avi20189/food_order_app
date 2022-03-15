import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

//Ceate a driver 
//Accept all parameters and customize accordingly
//return to App.js
const Meals = () => {
   return (
   <Fragment>
       <MealsSummary />
       <AvailableMeals />

   </Fragment>
   );
};

export default Meals;