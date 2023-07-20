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

    const [nameWineValid, setWineNameValid] = useState(true)
    const [imageWineValid, setWineImageValid] = useState(true)
    const [descWineValid, setWineDescValid] = useState(true)
    const [priceWineValid, setWinePriceValid] = useState(true)

    const [formWineValid, setWineFormValid] = useState(false)

    const cookies = new Cookie()
    const handleFoodSubmit = async (e) => {
const URL = process.env.REACT_APP_BACKEND
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const dataArray = [...formData]
        const dataObj = Object.fromEntries(dataArray);
        const data = { ...dataObj, user: cookies.get('auth') }

        if (nameValid && imageValid && descValid && priceValid) {
            try {
                await fetch (`${URL}/menu/create`, {
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
        window.location.reload(false)

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
                await fetch(`${URL}/drinks/create`, {
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
        window.location.reload(false)

    }

    const validateName = (name) => {
        if (name === '') {
            setNameValid(false)
            setFormValid(false)
        } else {
            setNameValid(true)
            setFormValid(true)
        }
    }
    const validateImageUrl = (img) => {
        if (img.length === 0 || img === '') {
            setFormValid(false)
            setImageValid(false)
        } else {
            setFormValid(true)
            setImageValid(true)
        }
    }
    const validateDesc = (desc) => {
        if (desc.length === 0 || desc === '') {
            setFormValid(false)
            setDescValid(false)
        } else {
            setFormValid(true)
            setDescValid(true)
        }

    }
    const validatePrice = (price) => {
        if (price === '') {
            setPriceValid(false)
            setFormValid(false)
        } else {
            setPriceValid(true)
            setFormValid(true)
        }

    }

    const validateWineName = (name) => {
        if (name === '') {
            setWineNameValid(false)
            setWineFormValid(false)
        } else {
            setWineNameValid(true)
            setWineFormValid(true)
        }
    }
    const validateWineImageUrl = (img) => {
        if (img.length === 0 || img === '') {
            setWineFormValid(false)
            setWineImageValid(false)
        } else {
            setWineFormValid(true)
            setWineImageValid(true)
        }
    }
    const validateWineDesc = (desc) => {
        if (desc.length === 0 || desc === '') {
            setWineFormValid(false)
            setWineDescValid(false)
        } else {
            setWineFormValid(true)
            setWineDescValid(true)
        }

    }
    const validateWinePrice = (price) => {
        if (price === '') {
            setWinePriceValid(false)
            setWineFormValid(false)
        } else {
            setWinePriceValid(true)
            setWineFormValid(true)
        }

    }

    return (
        <AdminMenuCreationDiv>

            <AdminMenuContainer id="food" javascript="false" onSubmit={handleFoodSubmit}>
                    <h1  style = {{color:'white', fontSize:'2rem'}}> Създаване на храна</h1>
                <AdminMenuInputContainer>
                    {nameValid
                        ? <AdminLabel>Име на ястието</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидно име!</AdminLabel>
                    }
                    <AdminMenuInput required  name="name" onBlur={(e) => validateName(e.target.value)} />
                    {imageValid
                        ? <AdminLabel>Път към снимка</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете правилн линк към снимка!</AdminLabel>
                    }
                    <AdminMenuInput required  name="imageUrl" onBlur={(e) => validateImageUrl(e.target.value)} />
                    {descValid
                        ? <AdminLabel>Описание</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете описание!</AdminLabel>
                    }
                    <AdminMenuInput required  name="description" onBlur={(e) => validateDesc(e.target.value)} />
                    {priceValid
                        ? <AdminLabel>Цена</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидна Цена</AdminLabel>
                    }
                    <AdminMenuInput required  name="price" onBlur={(e) => validatePrice(e.target.value)} />

                </AdminMenuInputContainer>
                <AdminMenuSubmit disabled={!formValid}>Създай</AdminMenuSubmit>
            </AdminMenuContainer>
            <AdminMenuContainer id="drinks" javascript="false" onSubmit={handleWineSubmit}>
                    <h1  style = {{color:'white', fontSize:'2rem'}}> Създаване на наптика</h1>
                <AdminMenuInputContainer >
                    {nameWineValid
                        ? <AdminLabel>Име на вино</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидно име!</AdminLabel>
                    }
                    <AdminMenuInput required  name="name" onBlur={(e) => validateWineName(e.target.value)} />
                    {imageWineValid
                        ? <AdminLabel>Път към снимка</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете правилн линк към снимка!</AdminLabel>
                    }
                    <AdminMenuInput required  name="imageUrl" onBlur={(e) => validateWineImageUrl(e.target.value)} />
                    {descWineValid
                        ? <AdminLabel>Описание</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете описание!</AdminLabel>
                    }
                    <AdminMenuInput required  name="description" onBlur={(e) => validateWineDesc(e.target.value)} />
                    {priceWineValid
                        ? <AdminLabel>Цена</AdminLabel>
                        : <AdminLabel style={{ color: 'red' }}>Въведете валидна Цена</AdminLabel>
                    }
                    <AdminMenuInput required  name="price" onBlur={(e) => validateWinePrice(e.target.value)} />

                </AdminMenuInputContainer>
                <AdminMenuSubmit disabled={!formWineValid}>Създай</AdminMenuSubmit>
            </AdminMenuContainer>
        </AdminMenuCreationDiv>

    )
}

export default AdminMenu