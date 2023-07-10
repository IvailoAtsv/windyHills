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
    const [time, setTime] = useState()
    const [nameValid, setNameValid] = useState(true)
    const [phoneValid, setPhoneValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [timeValid, setTimeValid] = useState(true)
    const [info, setInfo] = useState()

    const onChange = (time, timeString) => {
        if(time.$H && time.$m){

            if (time.$H < 9 || time.$H > 22) {
                setTimeValid(false)
                console.log('false bro');
            } else {
                setTimeValid(true)
            }
            if (timeValid) {
                const dateFormated = time.$d.toString().split('GMT+0300 (Eastern European Summer Time)')[0]
                setTime(dateFormated)
            }
        }
    }
//post req
    const onSubmitHandler = async (e) => {

        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray);
        const fullData = {  time, ...data }
        setInfo(fullData)
        try{
            await fetch('http://localhost:4000/reservation/create',{
                headers:{
                    'Content-Type':'application/json'
                },
                method:"POST",
                body: JSON.stringify(info)
            })
        }catch(err){
            console.log(err);
        }
        console.log('sent');
    }
    

    const onNameChange = (e) => {
        e.target.value.length < 3
            ? setNameValid(false)
            : setNameValid(true)

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
                    <ReservationInput name="name" onBlur={onNameChange} />
                    {!phoneValid
                        ? <ReservationLabel style={{ color: "red" }}>Невалиден телефонен номер</ReservationLabel>
                        : <ReservationLabel> Телефон </ReservationLabel>}
                    <ReservationInput name="phone" onBlur={onPhoneChange} />
                    {!emailValid
                        ? <ReservationLabel style={{ color: "red" }}>Невалиден e-mail</ReservationLabel>
                        : <ReservationLabel> Имейл </ReservationLabel>}
                    <ReservationInput name="email" onBlur={onEmailChange} />
                    <ReservationLabel> Детайли </ReservationLabel>
                    <ReservationInput name="details" />
                </ReservationInputContainer>
                <DateTimeContainer>

                    <Calendar minDate={new Date()} maxDate={new Date(Date.now() + 12096e5)} defaultValue ={new Date()} value={date} onClickDay={(date) => setDate(date)} />
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