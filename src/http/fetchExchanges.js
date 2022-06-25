import axios from 'axios';

export const  fetchData =  async () => {
    const {data} = await axios.get(`http://data.fixer.io/api/latest?access_key=ce6552c10175414128d02571bea5254c`);
    return data;
}
