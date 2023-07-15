import { useState } from "react"
import { AdminInput, AdminInputContainer, AdminLabel, AdminSubmit, BgContainer } from "./AdminComponents"
import { useHistory } from "react-router-dom"
import AdminDashboard from "../AdminDashboard"
const Admin = () => {

    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onSubmitHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray);
        try {
            const res = await fetch('http://localhost:4000/admin/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            if (res.ok) {
                setIsLoggedIn(true)
            }
        } catch (err) {
            console.log(err);
        }

    }

        return (
            <BgContainer onSubmit={onSubmitHandler}>
                {!isLoggedIn ?
                    <AdminInputContainer>
                        <AdminLabel>Name</AdminLabel>
                        <AdminInput name="admin" />
                        <AdminLabel>password</AdminLabel>
                        <AdminInput name="password" type="password" />
                        <AdminSubmit> Login </AdminSubmit>
                    </AdminInputContainer>
                    : <AdminDashboard>
                        
                    </AdminDashboard>
                }

            </BgContainer >
        )
    
}
export default Admin