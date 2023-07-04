import { AdminInput, AdminInputContainer, AdminLabel, AdminSubmit, BgContainer } from "./AdminComponents"

const Admin = () => {
    return (
        <BgContainer>
            <AdminInputContainer>
                <AdminLabel>Name</AdminLabel>
                <AdminInput />
                <AdminLabel>password</AdminLabel>
                <AdminInput />
            <AdminSubmit> Login </AdminSubmit>
            </AdminInputContainer>
        </BgContainer >
    )
}

export default Admin