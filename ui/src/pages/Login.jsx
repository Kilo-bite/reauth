import { Link } from "react-router"
import LoginForm from "../components/forms/LoginForm"
import Brand from "../components/brands/login/Brand"

const Login = () => (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg
                        bg-white py-16 px-10 ext-center sm:px-12 md:px-[60px]"
                    >
                        <Brand title={'Sign in'} />
                        <LoginForm />
                        <Link
                            to="#"
                            className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                        >
                            Forgot Password?
                        </Link>
                        <p className="text-base text-[#adadad]">
                            Not a member yet? <Link to="/register" className="text-primary hover:underline">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Login