import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { createCity, createHotel, fetchCities } from '../../http/hotelAPI';
import Modal from '../Modal/Modal';
import styles from './Admin.module.scss';

const Admin = observer(() => {
  const { hotel } = useContext(Context);
  const [modalCity, setModalCity] = useState(false);
  const [modalHotel, setModalHotel] = useState(false);
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetchCities().then((data) => hotel.setCities(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const addCity = () => {
    createCity({ name: value }).then((data) => {
      setValue('');
      setModalCity(false);
    });
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addHotel = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('cityId', hotel.selectedCity.id);
    createHotel(formData).then((data) => setModalHotel(false));
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setModalCity(true)}>
        Добавить город
      </button>
      <button className={styles.btn} onClick={() => setModalHotel(true)}>
        Добавить отель
      </button>

      <Modal active={modalCity} setActive={setModalCity}>
        <h2 className={styles.modalTitle}>Добавить город</h2>
        <input
          placeholder="Введите название города"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.modalFooter}>
          <button className={styles.btn} onClick={addCity}>
            Добавить
          </button>
          <button className={styles.btn} onClick={() => setModalCity(false)}>
            Закрыть
          </button>
        </div>
      </Modal>
      <Modal active={modalHotel} setActive={setModalHotel}>
        <h2 className={styles.modalTitle}>Добавить отель</h2>
        <input
          placeholder="Введите название отеля"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Введите стоимость"
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number"
          value={price}
        />
        <input type="file" onChange={selectFile} />
        <ul>
          {hotel.cities.map((city) => (
            <li onClick={() => hotel.setSelectedCity(city)} key={city.id}>
              {city.name}
            </li>
          ))}
        </ul>
        <button onClick={addInfo}>Добавить новое свойство</button>
        {info.map((i) => (
          <div></div>
        ))}
        <div className={styles.modalFooter}>
          <button className={styles.btn} onClick={addHotel}>
            Добавить
          </button>
          <button className={styles.btn} onClick={() => setModalHotel(false)}>
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
});

export default Admin;
