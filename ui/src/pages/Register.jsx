import { Link } from "react-router"
import RegisterForm from "../components/forms/RegisterForm"
import Brand from "../components/brands/login/Brand"

const Register = () => (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg
                        bg-white py-16 px-10 ext-center sm:px-12 md:px-[60px]"
                    >
                        <Brand title={'Register an Account'} />
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Register