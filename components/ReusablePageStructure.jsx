const ReusablePageStructure = ({children}) => {
    return (
        <div className="flex flex-col items-start justify-start bg-gray-400">
            {children}
        </div>
    )
}

export default ReusablePageStructure