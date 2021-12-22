import {$authHost, $host} from "./index";

export const createCity = async (city) => {
    const {data} = await $authHost.post('api/city', city)
    return data
}

export const fetchCities = async () => {
    const {data} = await $host.get('api/city')
    return data
}

export const createHotel = async (hotel) => {
  const {data} = await $authHost.post('api/hotel', hotel)
  return data
}

export const fetchHotels = async () => {
  const {data} = await $host.get('api/hotel')
  return data
}

export const fetcOneHotel = async (id) => {
  const {data} = await $host.get('api/hotel/' + id)
  return data
}
