import Button from "./form-fields/Button"
import Input from "./form-fields/Input"

const fields = [
    {type: "text", name: "fullname", placeholder: "Jonh Doe"},
    {type: "email", name: "email", placeholder: "test@example.com"},
    {type: "password", name: "password", placeholder: "Password"},
    {type: "password", name: "confirmPassword", placeholder: "Confirm password"},
    {type: "submit", value: "Register account"},
]

const RegisterForm = ({formData, onChange, onSubmit}) => {
    const submitField = fields.find(field => field.type === 'submit')
    const inputFields = fields.filter(field => field.type !== 'submit')

    return (
        <form onSubmit={onSubmit}>

            {inputFields.map((field, indx) => {
                return <Input 
                    key={indx} 
                    item={field}
                    value={formData[field.name]}
                    onChange={onChange}
                />
            })}
            <Button item={submitField} />
        </form>
    )
}

export default RegisterForm