import { useState } from "react";
import { DateTimeContainer, ReservationContainer, ReservationInput, ReservationInputContainer, ReservationLabel, ReservationSubmit, ReservationTitle } from "./ReservationElements"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const Reservation = () => {
    const [date, setDate] = useState()


    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };
    const onSubmitHandler = (e) => {
        try{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const dataArray = [...formData]
            console.log(Object.fromEntries(dataArray));
        }catch(err){
            console.log(err);
        }
    }
    return (
        <ReservationContainer id="reservation" onSubmit={onSubmitHandler}>
            <ReservationInputContainer>
                <ReservationTitle>Запазете маса</ReservationTitle>

                <ReservationLabel> Име и Фамилия </ReservationLabel>
                <ReservationInput name="name" />
                <ReservationLabel> Телефон </ReservationLabel>
                <ReservationInput name="phone"/>
                <ReservationLabel> Имейл </ReservationLabel>
                <ReservationInput name="email"/>
                <ReservationLabel> Детайли </ReservationLabel>
                <ReservationInput name="details"/>
            </ReservationInputContainer>
            <DateTimeContainer>
                <Calendar minDate={new Date()} onClickDay={(date) => setDate(date)} />
                <TimePicker onChange={onChange} size="large" disabledHours={() => { return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23] }} changeOnBlur={true} showNow={false} minuteStep={15} secondStep={59} disabledSeconds={() => { return [59] }} hideDisabledOptions={true} />
            </DateTimeContainer>
            <ReservationSubmit>Изпрати</ReservationSubmit>
        </ReservationContainer>
    )
}

export default Reservation