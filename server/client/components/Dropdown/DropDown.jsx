import { useContext, useState } from 'react';
import { Context } from '../..';
import styles from './DropDown.module.scss';

function Dropdown({ options, selected, setSelected, setSelectedCity }) {
  const { hotel } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownBtn} onClick={(e) => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {options.map((city) => (
            <div
              className={styles.dropdownItem}
              key={city.id}
              onClick={() => {
                setSelected(city.name);
                setIsActive(false);
                hotel.setSelectedCity(city);
              }}>
              {city.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
