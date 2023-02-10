import './App.css';
import OpenWeather from 'react-open-weather-widget';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import { useEffect, useState } from 'react';
import AreaSearch from './component/AreaSearch';
function App() {
  const [areaInfo,setAreaInfo] = useState(undefined)
  const currentPosition = () => {
    const positionCurrent =  navigator.geolocation.getCurrentPosition((position)=>{
        const { latitude, longitude } = position.coords;
        console.log(latitude,longitude)
        setAreaInfo({ lat: String(latitude), lon: String(longitude) })
    })

}
  useEffect(()=>{
    currentPosition();
  },[])
  console.log(areaInfo)
  return (
    <div className="App">
      <AreaSearch setAreaInfo={setAreaInfo}/>
      {areaInfo && <OpenWeather
        forecast="5days"
        apikey="32457b4c7c4de58df90f202dca2fd690"
        type="geo"
        lat={areaInfo.lat}
        lon={areaInfo.lon}
      />}

    </div>
  );
}

export default App;
