import { CircularProgress, Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import './WeatherUpdate.css';

function WeatherUpdate() {
  const [cityName, setCityName] = useState('Caloocan City');
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=189271b827844bff7388350c44848615&units=metric`
    )
      .then(res => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  return (
    <div className='bg_img font-montserrat'>
      {!loading ? (
        <>
          <h1 className='city'>{data.name}</h1>
          <div className='group'>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=''
            />
            <h1>{data.weather[0].main}</h1>
          </div>

          <h1 className='temp'>{data.main.temp.toFixed()} °C</h1>

          <Slide direction='right' timeout={800} in={!loading}>
            <div className='box_container'>
              <div className='box'>
                <p>Halumigmig</p>
                <h1>{data.main.humidity.toFixed()}%</h1>
              </div>

              <div className='box'>
                <p>Hangin</p>
                <h1>{data.wind.speed.toFixed()} km/h</h1>
              </div>

              <div className='box'>
                <p>Temperatura</p>
                <h1>{data.main.feels_like.toFixed()} °C</h1>
              </div>
            </div>
          </Slide>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default WeatherUpdate;
