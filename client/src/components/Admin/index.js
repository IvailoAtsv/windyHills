import { useEffect, useState } from "react"
import { AdminForm, AdminInput, AdminInputContainer, AdminLabel, AdminSubmit, BgContainer } from "./AdminComponents"
import AdminDashboard from "../AdminDashboard"
import Cookie from 'universal-cookie'
import { RedirectButton } from "../AdminDashboard/AdminDashComponents"
import AdminMenuAdd from "../AdminMenuAdd"
import AdminMenuPreview from "../AdminMenuPreview"
import { AdminTitle } from "../AdminDashboard/AdminDashComponents"

const Admin = () => {
    const cookies = new Cookie()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const currentCookie = cookies.get('auth')
        if(currentCookie && currentCookie !==''){
            setIsLoggedIn(true)
        }
    }, [])


    const onSubmitHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray);
        try {

            const res = await fetch(`${process.env.REACT_APP_BACKEND}/admin/login`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Headers': true,
                    'Access-Control-Allow-Origin': true
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            setIsLoggedIn(true)
            
        } catch (err) {
            console.log(err);
        }
    }
    

    return (
        <BgContainer >

            {!isLoggedIn ?
            <AdminForm onSubmit={onSubmitHandler}>

            
                <AdminInputContainer>
                    <AdminLabel>Name</AdminLabel>
                    <AdminInput name="admin" />
                    <AdminLabel>password</AdminLabel>
                    <AdminInput name="password" type="password" />
                    <AdminSubmit> Login </AdminSubmit>
                </AdminInputContainer>
                </AdminForm>
                :
                <>
            <AdminTitle>Резервации</AdminTitle>
                <AdminDashboard />
            <AdminTitle>Създаване на предмет за меню</AdminTitle>
                <AdminMenuAdd />
            <AdminTitle>Текущо меню</AdminTitle>

                <AdminMenuPreview />
                </>
            }
            <RedirectButton to="/">Начална страница</RedirectButton>

        </BgContainer >
    )

}
export default Admin