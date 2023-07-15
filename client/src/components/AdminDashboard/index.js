import { useEffect, useState } from "react"
import { AdminReservationShell, RedirectButton, ReservationBtn, ReservationCard, ReservationTitle } from "./AdminDashComponents"

const AdminDashboard = () =>{

    const [reservations,setReservations] = useState()

    useEffect( ()=>{
        async function getReservations(){

            try{   
                const result = await fetch('http://localhost:4000/reservation')
                const reservationsArr = await result.json()
                
                setReservations(reservationsArr)
            }catch(err){
                console.log(err);
            }
        }
        getReservations()
    },[])

    const handleClick = async (reservation) =>{
        if(window.confirm('Сигурни ли сте че искате да изтриете резервацията?')){
            try{
                await fetch('http://localhost:4000/reservation/delete',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(reservation)
                })
                window.location.reload(false)
            }catch(err){
                console.log(err);
            }
        }
    }

console.log(reservations);
    return(
        <AdminReservationShell>
            {reservations?.map((reservation, index)=>
            <ReservationCard key={index}>
                <ReservationTitle>Име: {reservation.name}</ReservationTitle>
                <ReservationTitle>Телефон: {reservation.phone}</ReservationTitle>
                <ReservationTitle>Брой гости:{reservation.guests}</ReservationTitle>
                <ReservationTitle>Е-мейл: {reservation.email}</ReservationTitle>
                <ReservationTitle>Детайли: {reservation.details}</ReservationTitle>
                <ReservationTitle>Час: {reservation.hours}: {reservation.minutes}</ReservationTitle>
                <ReservationTitle>Дата: {reservation.date.split('-').reverse().join('-')}</ReservationTitle>

                <ReservationBtn onClick={()=>handleClick(reservation)}>Готово</ReservationBtn>
            </ReservationCard>)}
        </AdminReservationShell>
    )
}

export default AdminDashboard