import NavLink from "../NavLink/NavLink"

const NavList = ({items}) => {
    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg
                p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium "
            >
                {items.map((item, indx) => {
                    return <NavLink key={indx} item={item} />
                })}
            </ul>
        </div>
    )
}

export default NavList