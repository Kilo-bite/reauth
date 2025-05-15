import { Link } from "react-router"

const Brand = ({title}) => (
    <Link to="/" className="flex items-center">
        {title}
    </Link>
)

export default Brand