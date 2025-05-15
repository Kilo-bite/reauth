import { Link } from "react-router"

const NavLink = ({item}) => {
    return (
        <li>
            <Link
                to={item.url}
                className="block rounded py-2 pr-4 pl-3 text-white hover:bg-orange-300"
                aria-current="page"
            >
                {item.name}
            </Link>
        </li>
    )
}

export default NavLink