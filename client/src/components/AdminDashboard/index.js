import { useEffect, useState } from "react"
import { AdminReservationShell, ReservationCard, ReservationTitle } from "./AdminDashComponents"

const AdminDashboard = () =>{

    const [reservations,setReservations] = useState()

    useEffect(async ()=>{

        try{   
            const result = await fetch('http://localhost:4000/reservation')
            const reservationsArr = await result.json()
            
            setReservations(reservationsArr)
        }catch(err){
            console.log(err);
        }
    },[])
console.log(reservations);
    return(
        <AdminReservationShell>
            {reservations?.map((reservation, index)=>
            <ReservationCard key={index}>
                <ReservationTitle>{reservation.name}</ReservationTitle>
                <ReservationTitle>{reservation.phone}</ReservationTitle>
                <ReservationTitle>{reservation.email}</ReservationTitle>
                {reservation.details =='' && <ReservationTitle>{reservation.details}</ReservationTitle>}
                ?<ReservationTitle>{reservation.hours}: {reservation.minutes}</ReservationTitle>

                
            </ReservationCard>)}
        </AdminReservationShell>
    )
}

export default AdminDashboard