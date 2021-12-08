import {makeAutoObservable} from "mobx";

export default class HotelStore {
  constructor() {
    this._cities = []
    this._hotels = []
    this._selectedCity = {}
    makeAutoObservable(this)
  }

  setCities(cities) {
    this._cities = cities
  }
  setHotels(hotels) {
    this._hotels = hotels
  }

  setSelectedCity(city) {
    this._selectedCity = city
  }

  get cities() {
    return this._cities
  }
  get hotels() {
    return this._hotels
  }
  get selectedCity() {
    return this._selectedCity
  }

}