import { observer } from 'mobx-react';
import { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Context } from '../..';

const CityBar = observer(() => {
  const { hotel } = useContext(Context);
  return (
    <ul>
      {hotel.cities.map((city) => (
        <li
          style={{ cursor: 'pointer' }}
          active={city.id === hotel.selectedCity.id}
          onClick={() => hotel.setSelectedCity(city)}
          key={city.id}>
          {city.name}
        </li>
      ))}
    </ul>
  );
});

export default CityBar;
