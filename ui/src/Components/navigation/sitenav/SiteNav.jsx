import Brand from "../../brands/navbar/Brand"
import NavList from "../NavList/NavList"

const navLinks = [
    {url: '/', name: 'Home'},
    {url: '/login', name: 'Sign in'},
    {url: '/register', name: 'Create an account'},
]

const SiteNav = () => (
    <nav className="bg-cyan-900 text-white px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Brand title={'Reauth'} />
            <NavList items={navLinks} />
        </div>
    </nav>
)

export default SiteNav