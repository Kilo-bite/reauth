import Button from "./form-fields/Button"
import Input from "./form-fields/Input"

const fields = [
    {type: "email", name: "email", placeholder: "test@example.com"},
    {type: "password", name: "password", placeholder: "Password"},
    {type: "submit", value: "Sign in"},
]

const LoginForm = (
    {
        email,
        password,
        onEmailChange,
        onPasswordChange,
        onSubmit
    }
) => {
    const submitField = fields.find(field => field.type === 'submit')
    const inputField = fields.filter(field => field.type !== 'submit')


    return (
        <form onSubmit={onSubmit}>

            {inputField.map((field, indx) => {
                return <Input 
                    key={indx} 
                    item={field}
                    value={field.name === "email" ? email : password}
                    onChange={field.name === "email" ? onEmailChange : onPasswordChange} 
                />
            })}
            <Button item={submitField} />
        </form>
)

}

export default LoginForm