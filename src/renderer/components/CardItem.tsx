import GameCard from 'Models/GameCard';

const CardItem: React.FC<{ item: GameCard }> = (props) => {
  return (
    <tbody>
      <tr>
        <th>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            ></input>
          </div>
        </th>
        <th scope="row">3</th>
        <td>{props.item.name}</td>
        <td>{props.item.health}</td>
        <td>{props.item.attack}</td>
        <td>{props.item.def}</td>
      </tr>
    </tbody>
  );
};

export default CardItem;
