const ReusableSection = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pb-16 md:pb-32 overflow-hidden'>
            <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
                {children}
            </div>
        </div>
    )
}

export default ReusableSection