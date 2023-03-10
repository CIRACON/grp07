import React, { useEffect, useState } from "react"; 
import {getData} from '../rest/index.js'
import {Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPlanets } from '../rest/index.js';

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {

        let promise = getData("http://localhost:4000/planets");
        promise.then(
            (text) => {
                let planetsArray = text;
                console.log(planetsArray);
                setPlanets(planetsArray);
            }
        )
    }, []);
    // let url = 'https://swapi.dev/api/planets';

    // useEffect(() => {
    //     getUrl(url)
    //     .then(listOfPlanets => setPlanets(listOfPlanets))
    
    // }, [url]); 
    // console.log(planets);
    return(
        <>
            <Row>
                <h2 style={styles.h2}>Planets</h2>
                <Row id="films">
                    {planets.map((planet, index) => <div key={index}><Button variant="outline-warning">{planet.fields.name}</Button></div>)}
                </Row>
            </Row>
        </>

    );
}

const styles = {
    h2:{
        color: '#FFC933'
    }
}