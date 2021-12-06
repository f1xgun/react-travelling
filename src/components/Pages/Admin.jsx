import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './Admin.module.scss';

function Admin() {
  const [modalCity, setModalCity] = useState(false);
  const [modalHotel, setModalHotel] = useState(false);

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
        <input placeholder="Введите название" />
        <div className={styles.modalFooter}>
          <button className={styles.btn} onClick={() => setModalCity(false)}>
            Добавить
          </button>
          <button className={styles.btn} onClick={() => setModalCity(false)}>
            Закрыть
          </button>
        </div>
      </Modal>
      <Modal active={modalHotel} setActive={setModalHotel}>
        <h2 className={styles.modalTitle}>Добавить отель</h2>
        <input placeholder="Введите название отеля" />
        <input placeholder="Введите стоимость" type="number" />
        <input placeholder="Введите стоимость" type="file" />
        <div className={styles.modalFooter}>
          <button className={styles.btn} onClick={() => setModalHotel(false)}>
            Добавить
          </button>
          <button className={styles.btn} onClick={() => setModalHotel(false)}>
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Admin;
