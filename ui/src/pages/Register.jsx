import RegisterForm from "../components/forms/RegisterForm"
import Brand from "../components/brands/login/Brand"
import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleForm = e => {
        const {
            name,   // Getting the name of the field currently being interacted with
            value   // Extracting the value of the field currently being interacted with
        } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match")
            return
        }

        console.log(formData)
    }

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg
                            bg-white py-16 px-10 ext-center sm:px-12 md:px-[60px]"
                        >
                            <Brand title={'Register an Account'} />
                            <RegisterForm
                                formData={formData}
                                onChange={handleForm}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register