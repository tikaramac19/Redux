import classes from "./CartButton.module.css";
import { toggle } from "../../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  // const toggle = useSelector((state)=> state.ui.toggle)

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
