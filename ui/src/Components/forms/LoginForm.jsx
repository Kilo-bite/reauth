import Button from "./form-fields/Button"
import Input from "./form-fields/Input"

const fields = [
    {type: "email", placeholder: "test@example.com"},
    {type: "password", placeholder: "Password"},
    {type: "submit", value: "Sign in"},
]

const LoginForm = () => {
    const submitField = fields.find(field => field.type === 'submit')
    const inputField = fields.filter(field => field.type !== 'submit')


    return (
        <form>

            {inputField.map((field, indx) => {
                return <Input key={indx} item={field} />
            })}
            <Button item={submitField} />
        </form>
)

}

export default LoginForm