import React, { useState } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';


const Login = () => {
    const today = moment().format('YYYY-MM-DD').toString()
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD').toString()
    const [departureAirport, setDepartureAirPort] = useState('')
    const [checkin, setCheckIn] = useState(today)
    const [checkout, setCheckOut] = useState(tomorrow)
    const [errors, setErrors] = useState({})


    const handleChangeDepartureAirport = (e) => {
        setDepartureAirPort(e.target.value)
        if (e.target.value) {
            setErrors((err) => ({ ...err, departureAirport: false }))
        } else {
            setErrors((err) => ({ ...err, departureAirport: true }))
        }
    }

    const handleChangeCheckIn = (e) => {
        setCheckIn(e.target.value)

        if (e.target.value) {
            setErrors((err) => ({ ...err, checkin: false }))
        } else {
            setErrors((err) => ({ ...err, checkin: true }))
        }
    }

    const handleChangeCheckOut = (e) => {
        setCheckOut(e.target.value);
        if (e.target.value) {
            setErrors((err) => ({ ...err, checkout: false }))
        } else {
            setErrors((err) => ({ ...err, checkout: true }))
        }
        if(moment(checkin) > moment(checkout)){
            setErrors((err)=>({...err, checkout:true}))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(moment(checkin) > moment(checkout)){
            setErrors((err)=>({...err, checkout:true}))
        }
        else if (departureAirport && checkin && checkout) {
            window.location.href = `/results?departureAirport=${departureAirport}&checkin=${checkin}&checkout=${checkout}`
        } else {
            setErrors({
                departureAirport: !departureAirport,
                checkin: !checkin,
                checkout: !checkout
            })
        }


    }


    return (
        <div className='container'>
            <div className="content">
        <div className="" style={{padding:'10rem'}}>
           
        <h1  style={{marginBottom:'3rem'}}>
            Login Demo Page
        </h1>
        <Link to="/">
            <h3>
                Back to Home Page
            </h3>
        </Link>
        </div>
        </div>
        </div>
    )
}

export default Login;