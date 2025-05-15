const Input = ({item}) => (
    <div className="mb-6">
        <input
            type={item.type}
            placeholder={item.placeholder}
            className="bordder-[#E9EDF4] w-full rounded-md border g-[#FCFDFE]
                py-3 px-5 ext-base text-body-color placeholder-[#ACB6BE]
                outline-none focus:border-primary focus-visible:shadow-none "
        />
        <div className="flex">
            <span className="text-red-400 text-sm m-2 p-2">err</span>
        </div>
    </div>
)

export default Input