import { getRestaurantData } from 'api/mockData';

export const loadRestaurantData = async ({ setDataRequest }) => {
  try {
    const { data } = await getRestaurantData();

    setDataRequest({
      data,
      isLoading: false,
      error: null,
    });
  } catch (error) {
    setDataRequest({
      data: [],
      isLoading: false,
      error,
    });
  }
};
