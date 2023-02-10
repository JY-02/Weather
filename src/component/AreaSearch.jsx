import './areaSearch.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

const AreaSearch=({setAreaInfo})=>{
   
    const [inputValue, setInputValue]=useState('');
    useEffect(()=>{
        Geocode.setApiKey("AIzaSyCI240qiIC84HRbp6PuyCJrRJN3ihmmUkA");
    },[])
    const searchAddress = async(address) => {
        try{
            const response=await Geocode.fromAddress(address)
            if(response.results.length){
                const { lat, lng } = response.results[0].geometry.location;
                setAreaInfo({lat:String(lat),lon:String(lng)})
            }
        }catch(err){
            console.log(err)
        }
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(setAreaInfo!==undefined){
            setAreaInfo(undefined)
        }
        searchAddress(inputValue)
        setInputValue('');
    }
    const onChangeInput=(e)=>{
        setInputValue(e.target.value);
    }
    return(
        <div className='searchContainer'>
            <h1>원하는 도시의 날씨 검색</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input 
                    type="text"
                    autoFocus
                    value={inputValue}
                    onChange={onChangeInput}
                />
                <button>검색</button>
            </form>
        </div>
    );

};

export default AreaSearch;