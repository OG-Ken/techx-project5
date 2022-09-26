import "./css/MealCard.css";

const MealCard = (props) => {
  return (
    <div className="card">
      <div className="card_title">
        <u>
          {" "}
          <h1>{props.title}</h1>
        </u>
        <h2> {props.firstItem}</h2>
        <h2> {props.secondItem}</h2>
        <h2>{props.drink} </h2>
      </div>
    </div>
  );
};

export default MealCard;
