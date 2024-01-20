import axios from "axios";

// const URL = 

// const options = {
  
// };

export const getPlacesData =  async (sw, ne) => {
    try {
        const { data: { data }} =  await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'a8649fc10cmsh35b45dbe1490226p13ed08jsn5fe8f10f8667',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });

        return data
    } catch (error) {
        console.log(error)
    }
}

