import { useEffect, useState } from "react"
import { AdminInput, AdminInputContainer, AdminLabel, AdminSubmit, BgContainer } from "./AdminComponents"
import { useHistory } from "react-router-dom"
import AdminDashboard from "../AdminDashboard"
import Cookie from 'universal-cookie'
import { RedirectButton } from "../AdminDashboard/AdminDashComponents"

const Admin = () => {
    const cookies = new Cookie()
    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cookie, setCookie] = useState()

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

            const res = await fetch('http://localhost:4000/admin/login', {
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
        <BgContainer onSubmit={onSubmitHandler}>

            {!isLoggedIn ?
                <AdminInputContainer>
                    <h1>cookie: {cookie}</h1>
                    <AdminLabel>Name</AdminLabel>
                    <AdminInput name="admin" />
                    <AdminLabel>password</AdminLabel>
                    <AdminInput name="password" type="password" />
                    <AdminSubmit> Login </AdminSubmit>
                </AdminInputContainer>
                :
                <AdminDashboard>

                </AdminDashboard>
            }
            <RedirectButton to="/">Обратно</RedirectButton>

        </BgContainer >
    )

}
export default Admin