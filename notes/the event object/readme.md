# THE EVENT OBJECT

The event object represents the DOM element that triggered the event 

## Key Properties of `event.target` in Form Inputs

When you type in an input field, the event onkect (event) contains:

| Property | Example Value | What it means |
|----------|---------------|---------------|
| `target.name` | `"email"` | The `name` attribute of your `<input name="email"> |
| `target.value` | `'user@xample.com'` | The current text/value in the input field |
| `target.type` | `'text'`, `'password'` | The input type (helps distinguish between text, checkbox, etc.) |
| `target.checked` | `true`/`false` | Only for checkboxes/radios (use instead of `value`) |

## Example: How it Works in Your Form

```jsx
<input
    type='email'
    name='email'                // -> e.target.name = 'email'
    value={formData.email}
    onChange={handleChange}     // Triggers when typing
/>
```

1. When you type "a"

* `e.target = {

```js
{
    name: 'email'   // from input's name attribute
    value: 'a'      // Current input value
    type: 'email'   // Input type
}

https://chat.deepseek.com/a/chat/s/29583779-a928-46df-8876-3a43439e1665