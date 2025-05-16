# REACT BEST PRACTICES: PROPERLY HANDLE FORM STATE

## 1. First, Optimize the Parent Component

```jsx
import { Link } from "react-router"
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

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name] = value
        })
    }

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg
                            bg-white py-16 px-10 ext-center sm:px-12 md:px-[60px]">
                            <Brand title={'Register an Account'} />
                            <RegisterForm
                                formData={formData}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```

## 2. Then Simplify the Form Component

```jsx
import Button from "./form-fields/Button"
import Input from "./form-fields/Input"

const fields = [
    {type: "text", name: "fullname", placeholder: "John Doe"},
    {type: "email", name: "email", placeholder: "test@example.com"},
    {type: "password", name: "password", placeholder: "Password"},
    {type: "password", name: "confirmPassword", placeholder: "Confirm password"},
    {type: "submit", value: "Register account"},
]

const RegisterForm = ({formData, onChange}) => {
    const submitField = fields.find(field => field.type === 'submit')
    const inputFields = fields.filter(field => field.type !== 'submit')

    return (
        <form>
            {inputFields.map((fields) => (
                <Input 
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={onChange}
                />
            ))}
            <Button item={submitField} />
        </form>
    )
}
```

### Key Imporovements:

1. **Unified State Management**

* Combined all form fields into a single **formData** state object.
* Created a single **handleChange** function that workd for all inputs.

2. **Consistent Naming**

* Make sure **name** attributes match state property names.
* Changed **confirm** to **confirmPassword** for consistency.

3. **Simplified Props**

* Reduced prop drilling from 8 props to just 2 (**formData** and **onChange**).
* Made the form more maintainable and scalable.

4. **Better Input Handling**

* Each input automatically get its value from `formData[name]`.
* All input use the same `onChange` handler.

5. **Type Safety**

* The `fields` array now serves as the single source of truth for form structure.

### Bonus: Adding Form Submission

To handle form submission, add this yo your `Register` component.

```jsx
const handleSubmit = e => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match")
        return
    }

    // submit logic here
    console.log('Form submitted:', formData)
}

// Add to RegisterForm component
<form onSubmit={handleSubmit}>
    ...
</form>
```

## Technique: Controlled Components with Unified State Management

This technique you're seeing is a combination of several React and software development patterns:

### 1. Controlled Components

* The standard React pattern where form inputs are controlled by react state.
* Each input's value comes from state, and changes are handled via `onChange`
* Required for forms in React to maintain a single source of truth.

### 2. Unified State Management

* Combining all form fields into a single state object (`formData`).
* Instead of multiple `useState` hooks, we manage everything in on object.
* Similar to how form libraries like Formik work.

### 3. Dynamic Field Rendering

* Using a configuration array(`fields`) to dynamically generate fields.
* Makes the form more maintainable and scalable.

### 4. Single Change Handler

* The `handleChange` function uses the input's `name` attribute to update state.
* Eliminates the need for individual handlers for each field.

## Why this Patterns

```jsx
// BEFORE (4 separate states + handlers)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
// ...plus handlers for each

// AFTER (Unified approach)
const [formData, setFormData] = useState({
    email: '',
    password: ''
})

const handleChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
```

## Breaking Down the Pattern

### 1. Understanding the `formData` State Structure

Your state manages these fields:

```js
const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
})
```

### 2. The Magic of `[name]: value`

In your `handleChange` function:

```js
const handleChange = e => {
    const { name, value } = e.target    // Destructure name and value from input
    setFormData({
        ...formData,                    // Copy all existing state
        [name]: value                   // Update ONLY the changed field
    })
}
```

### What `[name]: value` Actually Does

1. **Computed Property Names**

* The square brackets `[]` around `name` make it a dynamic key.
* JavaScript evaluates the variables `name` and uses its value as the property name.

2. **Practical Example**

* When typing in the email field

```js
// Input: <input name="email" ... />
e.target.name = 'email'
e.target.value = 'user@example.com'

// Become
setFormData({
    ...formData,
    ['email']: 'user@example.com'   // Or equivalently: email: 'user@example.com'
})
```

### Why This is Powerful

1. **One Handler Fits All**

* Works for ALL text inputs without writing individual handlers.
* The input's `name` attribute must match the `formData` property name.

2. **How Your Input Should Look**

```jsx
<input
    name="email"        // Must match formData key
    value={formData.email}
    onChange={handleChange}
/>
```

3. **Complete Field Update Flow**

```text
User types "A" in email field:

1. Input has name="email"
2. handleChange receives {name: "email", value: "A"}
3. State updates to {..., email: "A"}
4. React re-renders with new state
5. Input shows "A" (controlled component cycle)
```

### Common Pitfalls to Avoid

1. **Mismatched Names**

```jsx
// Won't work if names don't match!
<input nam="e-mail" />  // formData has "email"
```

2. **Checkbox/Radio Differences**

For non-text inputs, you'll need to handle `checked` instead:

```jsx
const { name, value, type, checked } = e.target
setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
})
```