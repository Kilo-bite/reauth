import { Link } from "react-router"

const _404 = () => {
    return (
        <div>
            <p>Page not found!</p>
            <p>Go back <Link to="/">home</Link>.</p>
        </div>
    )
}

export default _404