import classes from './MealsSummary.module.css';
import Card from '../UI/Card';
import MealItem from './MealsItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'سوشی',
    description: 'مرغوب ترین ماهی و سبزیجات',
    price: 220000,
  },
  {
    id: 'm2',
    name: 'شنیسل',
    description: 'یک تخصص آلمانی!',
    price: 165000,
  },
  {
    id: 'm3',
    name: 'برگر زغالی',
    description: 'آمریکایی، پخته و گوشتی',
    price: 120000,
  },
  {
    id: 'm4',
    name: 'سالاد',
    description: 'سالم و سبز...',
    price: 189000,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal =>
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>);
  return (
    <>
      <section className={classes.meals}>
        <ul>
          <Card>{mealsList}</Card>
        </ul>
      </section>
    </>
  );
}