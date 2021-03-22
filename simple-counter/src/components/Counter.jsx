import React, {useState, useEffect} from 'react';
import propTypes from 'prop-types';

export function Counter() {
    
    let [secondU,setSecondU]=useState(0);
    let [secondT,setSecondT]=useState(0);
    let [minU,setMinU]=useState(0);
    let [minT,setMinT]=useState(0);
    let [hourU,setHourU]=useState(0);
    let [hourT,setHourT]=useState(0);

    Counter.propTypes={
        seconds: propTypes.number,
    }


    useEffect(()=>{
        const interval = setInterval(timeProgress,1000);
        return ()=>{clearInterval(interval)}
    },[secondU, secondT, minU, minT, hourU, hourT]);

    function timeProgress(){
        setSecondU(secondU+1);
        if(secondU>=9){
            setSecondT(secondT+1);
            setSecondU(0);
            if(secondT>=5){
                setMinU(minU+1);
                setSecondT(0);
                if(minU>=9){
                    setMinT(minT+1);
                    setMinU(0);
                    if(minT>=5){
                        setHourU(hourU+1);
                        setMinT(0);
                        if(hourU>=9){
                            setHourT(hourT+1);
                            setHourU(0);
                            if((hourT>=2 &&hourU>=3&&minT>=5&&minU>=9&&secondT>=5&&secondU>=9)){
                                setSecondU(0);
                                setSecondT(0);
                                setMinU(0);
                                setMinT(0);
                                setHourU(0);
                                setHourT(0);
                            }
                        }
                    }
                }
            }
        }
    }
    
    


    let htmlDesign = (
        <div className='bg-dark text-white'>
            <div className="row py-4">
                <div className="col-2"></div>
                <div className="col-8 card-deck p-0">
                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title"><i className="far fa-clock"></i></h5>
                        </div>
                    </div>

                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='hourT'>{hourT}</h5>
                        </div>
                    </div>

                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='hourU'>{hourU}</h5>
                        </div>
                    </div>

                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='minT'>{minT}</h5>
                        </div>
                    </div>

                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='minU'>{minU}</h5>
                        </div>
                    </div>


                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='secondT'>{secondT}</h5>
                        </div>
                    </div>


                    <div className="card text-white bg-dark" >
                        <div className="card-body mx-auto">
                            <h5 className="card-title" id='secondU'>{secondU}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div >
        </div>);
    return (htmlDesign);
}