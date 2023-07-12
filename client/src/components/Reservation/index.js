import { useState } from "react";
import { DateTimeContainer, ReservationContainer, ReservationHourPicker, ReservationMinPicker, ReservationInput, ReservationInputContainer, ReservationLabel, ReservationShell, ReservationSubmit, ReservationTitle, TimeAndSubmitContainer, ReservationOption, ReservationDataContainer } from "./ReservationElements"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const Reservation = () => {

    const [value, onChange] = useState(new Date())
    
    const [timeValid, setTimeValid] = useState(true)
    const [nameValid, setNameValid] = useState(true)
    const [phoneValid, setPhoneValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [formValid, setFormValid] = useState()

    const [info, setInfo] = useState({
        time: {
            hours: '',
            minutes: ''
        },

    })




    //post req
    const onSubmitHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray);
        const fullData = { ...data, value }
        if(!nameValid || !phoneValid || !emailValid){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
        if(!fullData.hours || !fullData.minutes){
            setTimeValid(false)
        }else{
            setTimeValid(true)
        }
        try {
            await fetch('http://localhost:4000/reservation/create', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(fullData)
            })
        } catch (err) {
            console.log(err);
        }
        document.getElementById('reservation').reset()
    }


    const validateName = (name) => {
        if (name.length < 3) {
            setNameValid(false)
        } else {
            setNameValid(true)
        }
    }

    const validatePhone = (phone) => {
        if (phone.length < 10) {
            setPhoneValid(false)
        } else {
            setPhoneValid(true)
            setInfo({ ...info, phone: phone })

        }
    }
    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailValid(true)
            setInfo({ ...info, email: email })
        } else {
            setEmailValid(false)
        }
    }

    const getWorkingHours = (opening, closing) => {
        const hours = [0]
        for (let i = opening; i < closing; i++) {
            hours.push(i)
        }
        return hours
    }
    const getMinuteIntervals = (interval) => {
        const minutes = []
        for (let i = 0; i < 60; i += interval) {
            minutes.push(i)
        }
        return minutes
    }
  
    const workHours = getWorkingHours(9, 22)
    const intervals = getMinuteIntervals(15)

    return (
        <ReservationShell>
            <ReservationTitle>Направете Резервация</ReservationTitle>
            <ReservationContainer id="reservation" onSubmit={onSubmitHandler}>
                <ReservationDataContainer>
                <ReservationInputContainer>
                    {!nameValid
                        ? <ReservationLabel style={{ color: "red" }}>Името трябва да съдържа над 3 символа</ReservationLabel>
                        : <ReservationLabel>Име и Фамилия</ReservationLabel>}
                    <ReservationInput name="name" onBlur={(e) => validateName(e.target.value)} />
                    {!phoneValid
                        ? <ReservationLabel style={{ color: "red" }}>Невалиден телефонен номер</ReservationLabel>
                        : <ReservationLabel> Телефон </ReservationLabel>}
                    <ReservationInput name="phone" onBlur={(e) => validatePhone(e.target.value)} />
                    {!emailValid
                        ? <ReservationLabel style={{ color: "red" }}>Невалиден e-mail</ReservationLabel>
                        : <ReservationLabel> Имейл </ReservationLabel>}
                    <ReservationInput name="email" onBlur={(e) => validateEmail(e.target.value)} />
                    <ReservationLabel> Детайли </ReservationLabel>
                    <ReservationInput name="details" />
                </ReservationInputContainer>
                <DateTimeContainer>

                    <Calendar minDate={new Date()} maxDate={new Date(Date.now() + 12096e5)} onChange={onChange} value={value} />
                {!timeValid && <ReservationLabel style={{ color: "red" }}>Моля изберете час</ReservationLabel>}
                    <TimeAndSubmitContainer>
                        <ReservationLabel>час</ReservationLabel>
                        <ReservationHourPicker name="hours" >
                            {workHours.map((hour) => <ReservationOption>{hour}</ReservationOption>)}
                        </ReservationHourPicker>
                        <ReservationLabel>мин</ReservationLabel>
                        <ReservationMinPicker name="minutes">
                            {intervals.map((interval) => <ReservationOption>{interval}</ReservationOption>)}
                        </ReservationMinPicker>
                    </TimeAndSubmitContainer>
                </DateTimeContainer>
                </ReservationDataContainer>
                    <ReservationSubmit>Изпрати</ReservationSubmit>
            </ReservationContainer>
        </ReservationShell>
    )
}

export default Reservation