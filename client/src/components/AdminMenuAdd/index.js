import { useState } from "react"
import { AdminLabel } from "../Admin/AdminComponents"
import { AdminMenuContainer, AdminMenuCreationDiv, AdminMenuInput, AdminMenuInputContainer, AdminMenuSubmit } from "./AdminMenuComponents"
import Cookie from 'universal-cookie'


const AdminMenu = () => {

    const [nameValid, setNameValid] = useState(true)
    const [imageValid, setImageValid] = useState(true)
    const [descValid, setDescValid] = useState(true)
    const [priceValid, setPriceValid] = useState(true)

    const [formValid, setFormValid] = useState(false)

    const cookies = new Cookie()
    const handleFoodSubmit = async (e) => {

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const dataObj = Object.fromEntries(dataArray);
        const data = { ...dataObj, user: cookies.get('auth') }

        if (nameValid && imageValid && descValid && priceValid) {
            try {
                await fetch('http://localhost:4000/menu/create', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            } catch (err) {
                console.log(err);
            }
        }
        document.getElementById('food').reset()
    }
    const handleWineSubmit = async (e) => {

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const dataObj = Object.fromEntries(dataArray);
        const data = { ...dataObj, user: cookies.get('auth') }

        if (nameValid && imageValid && descValid && priceValid) {
            try {
                await fetch('http://localhost:4000/drinks/create', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            } catch (err) {
                console.log(err);
            }
        }
        document.getElementById('drinks').reset()
    }

    const validateName = (name) => {
        if (name == '') {
            setNameValid(false)
            setFormValid(false)
        } else {
            setNameValid(true)
            setFormValid(true)
        }
    }
    const validateImageUrl = (img) => {
        if (img.length == 0 || img == '') {
            setFormValid(false)
            setImageValid(false)
        } else {
            setFormValid(true)
            setImageValid(true)
        }
    }
    const validateDesc = (desc) => {
        if (desc.length == 0 || desc == '') {
            setFormValid(false)
            setDescValid(false)
        } else {
            setFormValid(true)
            setDescValid(true)
        }

    }
    const validatePrice = (price) => {
        if (price == '') {
            setPriceValid(false)
            setFormValid(false)
        } else {
            setPriceValid(true)
            setFormValid(true)
        }

    }

    return (
        <AdminMenuCreationDiv>

            <AdminMenuContainer id="food" javascript="false" onSubmit={handleFoodSubmit}>
                <AdminMenuInputContainer>
                    {nameValid
                        ? <AdminLabel>Име на ястието</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидно име!</AdminLabel>
                    }
                    <AdminMenuInput name="name" onBlur={(e) => validateName(e.target.value)} />
                    {imageValid
                        ? <AdminLabel>Път към снимка</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете правилн линк към снимка!</AdminLabel>
                    }
                    <AdminMenuInput name="imageUrl" onBlur={(e) => validateImageUrl(e.target.value)} />
                    {descValid
                        ? <AdminLabel>Описание</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете описание!</AdminLabel>
                    }
                    <AdminMenuInput name="description" onBlur={(e) => validateDesc(e.target.value)} />
                    {priceValid
                        ? <AdminLabel>Цена</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидна Цена</AdminLabel>
                    }
                    <AdminMenuInput name="price" onBlur={(e) => validatePrice(e.target.value)} />

                </AdminMenuInputContainer>
                <AdminMenuSubmit disabled={!formValid}>Създай</AdminMenuSubmit>
            </AdminMenuContainer>

            <AdminMenuContainer id="drinks" javascript="false" onSubmit={handleWineSubmit}>
                <AdminMenuInputContainer>
                    {nameValid
                        ? <AdminLabel>Име на вино</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидно име!</AdminLabel>
                    }
                    <AdminMenuInput name="name" onBlur={(e) => validateName(e.target.value)} />
                    {imageValid
                        ? <AdminLabel>Път към снимка</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете правилн линк към снимка!</AdminLabel>
                    }
                    <AdminMenuInput name="imageUrl" onBlur={(e) => validateImageUrl(e.target.value)} />
                    {descValid
                        ? <AdminLabel>Описание</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете описание!</AdminLabel>
                    }
                    <AdminMenuInput name="description" onBlur={(e) => validateDesc(e.target.value)} />
                    {priceValid
                        ? <AdminLabel>Цена</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидна Цена</AdminLabel>
                    }
                    <AdminMenuInput name="price" onBlur={(e) => validatePrice(e.target.value)} />

                </AdminMenuInputContainer>
                <AdminMenuSubmit disabled={!formValid}>Създай</AdminMenuSubmit>
            </AdminMenuContainer>
        </AdminMenuCreationDiv>

    )
}

export default AdminMenu