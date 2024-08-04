import Link from "next/link"

const Button = () => {
    return (
        <Link href={'/contact-us'} className='bg-[#317ACC] hover:bg-[#296494] text-white font-bold py-2 px-6 rounded-md'>
            Contact Us
        </Link>
    )
}

export default Button