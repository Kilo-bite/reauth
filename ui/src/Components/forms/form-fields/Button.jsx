const Button = ({item}) => (
    <div className="mb-10">
        <button
        type={item.type}
        className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
        >
            {item.value}
        </button>
    </div>
)

export default Button