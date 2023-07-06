import { useState } from "react";
import { DateTimeContainer, ReservationContainer, ReservationInput, ReservationInputContainer, ReservationLabel, ReservationShell, ReservationSubmit, ReservationTitle, TimeAndSubmitContainer } from "./ReservationElements"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const Reservation = () => {
    const [date, setDate] = useState()

    const [nameValid, setNameValid] = useState(true)
    const [phoneValid, setPhoneValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [timeValid, setTimeValid] = useState(true)
    const [time, setTime] = useState()

    const onChange = (time, timeString) => {
        if (timeString.split(':')[0] < 9 || timeString.split(':')[0] > 21) {
            setTimeValid(false)
            console.log('false bro');
        } else {
            setTimeValid(true)
        }
        if (timeValid) {
            setTime(timeString)
        }
    }

    const onSubmitHandler = (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const dataArray = [...formData]
            const data = Object.fromEntries(dataArray);
            const fullData = { time, date, ...data }
            console.log(fullData);
        } catch (err) {
            console.log(err);
        }
    }


    const onNameChange = (e) => {
        if (e.target.value.length < 3) {
            setNameValid(false)
            console.log('1');
        } else {
            setNameValid(true)
        }
    }
    const onPhoneChange = (e) => {
        if (e.target.value.length < 10) {
            setPhoneValid(false)
        } else {
            setPhoneValid(true)
        }
    }
    const onEmailChange = (e) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }


    return (
        <ReservationShell>
            <ReservationTitle>Направете Резервация</ReservationTitle>
            <ReservationContainer id="reservation" onSubmit={onSubmitHandler}>
                <ReservationInputContainer>

                    {!nameValid
                        ? <ReservationLabel style={{ color: "red" }}>Името трябва да съдържа над 3 символа</ReservationLabel>
                        : <ReservationLabel>Име и Фамилия</ReservationLabel>}
                    <ReservationInput name="name" onChange={onNameChange} />
                    {!phoneValid
                        ? <ReservationLabel style={{ color: "red" }}>Невалиден телефонен номер</ReservationLabel>
                        : <ReservationLabel> Телефон </ReservationLabel>}
                    <ReservationInput name="phone" onChange={onPhoneChange} />
                    {!emailValid 
                        ?<ReservationLabel style={{ color: "red" }}>Невалиден e-mail</ReservationLabel>
                        :<ReservationLabel> Имейл </ReservationLabel>}
                    <ReservationInput name="email" onChange={onEmailChange} />
                        <ReservationLabel> Детайли </ReservationLabel>
                    <ReservationInput name="details" />
                </ReservationInputContainer>
                <DateTimeContainer>
                    <Calendar minDate={new Date()} maxDate={new Date(Date.now() + 12096e5)} onClickDay={(date) => setDate(date)} />
                    {!timeValid && <ReservationLabel>Невалиден час!</ReservationLabel>}
                    <TimeAndSubmitContainer>
                        <TimePicker onChange={onChange} size="small" disabledHours={() => { return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23] }} changeOnBlur={true} showNow={false} minuteStep={15} secondStep={59} disabledSeconds={() => { return [59] }} hideDisabledOptions={true} />
                        <ReservationSubmit>Изпрати</ReservationSubmit>
                    </TimeAndSubmitContainer>
                </DateTimeContainer>
            </ReservationContainer>
        </ReservationShell>
    )
}

export default Reservation