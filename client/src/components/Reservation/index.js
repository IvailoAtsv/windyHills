import { useState } from "react";
import { ReservationContainer, ReservationAdultsChildren, ReservationHourPicker, ReservationMinPicker, ReservationInput, ReservationInputContainer, ReservationLabel, ReservationShell, ReservationSubmit, ReservationTitle, ReservationOption, ReservationDataContainer, ReservationCalendar, TimeContainer } from "./ReservationElements"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const Reservation = () => {

    const [timeValid, setTimeValid] = useState(true)
    const [nameValid, setNameValid] = useState(true)
    const [phoneValid, setPhoneValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [dateValid, setDateValid] = useState(true)
    const [formValid,setFormValid] = useState(true)

    //post req
    const onSubmitHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray);
        const fullData = { ...data }
        console.log(fullData.date);
        
        validateEmail(fullData.email)
        validateName(fullData.name)
        validatePhone(fullData.phone)

        if (!nameValid || !phoneValid || !emailValid) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
        if (formValid) {
            try {
                await fetch('http://localhost:4000/reservation/create', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(fullData)
                })
                document.getElementById('reservation').reset()
            } catch (err) {
                console.log(err);
            }
        } else {
            return setFormValid(false)
        }
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
        }
    }
    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailValid(true)

        } else {
            setEmailValid(false)
        }
    }

    const validateDate = (date) => {
        const day = Number(date.split('-')[2])
        const today = Number(new Date().getDate())
        if (day < today) {
            setDateValid(false)
        } else {
            setDateValid(true)
        }
    }

    const getWorkingHours = (opening, closing) => {
        const hours = ['']
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
    const today = new Date()
    const workHours = getWorkingHours(9, 22)
    const intervals = getMinuteIntervals(15)
    return (
        <ReservationShell>
            <ReservationTitle>Направете Резервация</ReservationTitle>
            <ReservationContainer id="reservation" onSubmit={onSubmitHandler}>
                <ReservationDataContainer>
                    <ReservationInputContainer>
                        {/* name input */}
                        {!nameValid
                            ? <ReservationLabel style={{ color: "red" }} >Името трябва да съдържа поне 3 символа</ReservationLabel>
                            : <ReservationLabel>Име и Фамилия:</ReservationLabel>}
                        <ReservationInput required="true" name="name" onBlur={(e)=>validateName(e.target.value)} />
                        {/* guests input */}
                        <ReservationLabel>Брой гости:</ReservationLabel>
                        <ReservationInput required="true" name="guests" type="number"></ReservationInput>
                        {/* phone input */}
                        {!phoneValid
                            ? <ReservationLabel style={{ color: "red" }}>Моля въведете валиден телефонен номер</ReservationLabel>
                            : <ReservationLabel> Телефон: </ReservationLabel>}
                        <ReservationInput required="true" name="phone" onBlur={(e) => validatePhone(e.target.value)} />
                        {/* email input */}
                        {/* {!emailValid
                            ? <ReservationLabel style={{ color: "red" }}>Моля въведете валиден e-mail</ReservationLabel>
                            : <ReservationLabel> Имейл: </ReservationLabel>}
                        <ReservationInput type="email" onBlur={(e)=>validateEmail(e.target.value)} name="email"  /> */}
                        {/* details */}
                        <ReservationLabel> Детайли: </ReservationLabel>
                        <ReservationInput name="details" />
                        {/* date */}
                        {!dateValid
                            ? <ReservationLabel style={{ color: "red" }}>Моля изберете предстояща или текуща дата</ReservationLabel>
                            : <ReservationLabel>Дата:</ReservationLabel>
                        }
                        <ReservationCalendar required="true" onBlur={(e) => validateDate(e.target.value)} defaultValue={today.toLocaleDateString('en-CA')} min={today} name="date" type="date"></ReservationCalendar>
                        {/* hour */}
                        {!timeValid
                            ? <ReservationLabel style={{ color: "red" }}>Моля изберете час</ReservationLabel>
                            : <ReservationLabel>час</ReservationLabel>
                        }
                        <TimeContainer>

                            <ReservationHourPicker placeholder="" required="true" onChange={(e) => {
                                if (!e.target.value || e.target.value == 0) {
                                    setTimeValid(false)
                                    setFormValid(false)
                                } else {
                                    setTimeValid(true)
                                    setFormValid(true)
                                }
                            }} name="hours" >
                                {workHours.map((hour, index) => <ReservationOption key={index}>{hour}</ReservationOption>)}
                            </ReservationHourPicker>
                            <ReservationMinPicker name="minutes" >
                                {intervals.map((interval, index) => <ReservationOption key={index}>{interval}</ReservationOption>)}
                            </ReservationMinPicker>
                        </TimeContainer>
                                </ReservationInputContainer>
                </ReservationDataContainer>
                <ReservationSubmit disabled={!formValid}>Изпрати</ReservationSubmit>
            </ReservationContainer>
        </ReservationShell>
    )
}

export default Reservation