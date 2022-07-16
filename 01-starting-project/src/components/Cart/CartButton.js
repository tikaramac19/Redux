import classes from "./CartButton.module.css";
import { toggle } from "../../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const cartQuantity = useSelector((state)=> state.cart.totalQuantity);

  console.log(cartQuantity);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
