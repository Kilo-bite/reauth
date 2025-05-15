import Button from "./form-fields/Button"
import Input from "./form-fields/Input"

const fields = [
    {type: "text", placeholder: "Jonh Doe"},
    {type: "email", placeholder: "test@example.com"},
    {type: "password", placeholder: "Password"},
    {type: "password", placeholder: "Confirm password"},
    {type: "submit", value: "Register account"},
]

const RegisterForm = () => {
    const submitField = fields.find(field => field.type === 'submit')
    const inputFields = fields.filter(field => field.type !== 'submit')

    return (
        <form>

            {inputFields.map((field, indx) => {
                return <Input key={indx} item={field} />
            })}
            <Button item={submitField} />
        </form>
    )
}

export default RegisterForm