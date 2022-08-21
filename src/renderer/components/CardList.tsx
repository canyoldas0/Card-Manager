import CardItem from './CardItem';
import GameCard from 'Models/GameCard';

function CardList() {
  const list = [
    new GameCard(6, 3, 12, 'Warrior'),
    new GameCard(4, 1, 8, 'Mage'),
  ];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Select</th>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Health</th>
          <th scope="col">Attack</th>
          <th scope="col">Defense</th>
        </tr>
      </thead>
      <CardItem item={list[0]}></CardItem>
      <CardItem item={list[1]}></CardItem>
    </table>
  );
}

export default CardList;
