"use client"
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PrivacyPolicy = () => {
    const pathname = usePathname();
    
    return (
        <div className="max-w-[84rem] mx-auto mt-[67px] p-4">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 md:w-[886px] mb-12 md:pr-8">
                    <h1 className="max-w-5xl font font-medium text-[24px] md:text-[46px] leading-[1.4] md:leading-[59.8px] mb-6 text-[#317ACC] ">
                        This Privacy Policy will help you better understand how we collect, use, and share your personal information.
                    </h1>
                    <h2 className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]">Privacy Policy</h2>
                    <p className="mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify ">
                        This privacy policy sets out how Creative Layer Inc. ("Creative Layer", "we", "us", or "our", and also doing business as "remx") collects, uses, and discloses, any personal information that you give us or that we collect when you use our website or Services. Creative Layer offers a platform that allows artists, brands and us to mint and sell NFTs and tokens and for purchasers to mint and buy NFTs ("Services"). By using our website or Services, or by choosing to give us personal information, you consent to this Privacy Policy and the processing of your Personal Information it describes. If you do not agree with any terms of this Privacy Policy, please exercise the choices we describe in this Policy, or do not use the Services and do not give us any personal information. Creative Layer may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. Your continued access to and/or use of our website or Services after any such changes constitutes your acceptance of, and agreement to this Privacy Policy, as revised.
                    </p>
                    <h3 className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]">Privacy Summary</h3>

                    <p className="mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify ">
                        <span className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]">  1. What Personal Information we collect.</span>  To register for our Services, you provide your public wallet address. If you make or buy an NFT, we collect information about your transaction, such as public wallet address, date and time, value, token ID, and transaction history. You may also choose to provide your email address, profile information such as name, social media handles, website, banner and profile pictures, as well as other information you choose. We may also collect information to meet our anti-money laundering and "know your client" obligations.
                    </p>

                    <p className="mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify  ">
                        <span className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]">2. What we do with the Personal Information we collect. </span>   We use the information we collect to provide our Services, including to allow you to register, make and buy NFTs, for record keeping, to improve our Services, to communicate with you about transactions, to manage, administer, maintain, service, collect and enforce our rights in respect to NFTs, to investigate and settle disputes, to investigate breaches, fraud and illegal activities, including anti-money laundering and "know your client" requirements.
                    </p>

                    <p className="mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify  ">
                        <span className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]" >3. How we Disclose Personal Information. </span> When you buy an NFT, your public wallet address, the date and time, the transaction value, and your token ID is recorded on the public blockchain. We also share information to investigate and prevent fraud, respond to claims, and in accordance with our legal purposes.
                    </p>

                    <p className="mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify ">
                        <span className="font text-[20px] md:text-[24px] font-bold mb-4 leading-[1.4] md:leading-[31.2px] text-[#317ACC]">4. What Personal Information we collect. </span>  "Personal Information" is information that may identify an individual such as a first and last name, home or other address, an email address, payment information, or a phone number or other contact information. The Personal Information we may collect depends on how you choose to use our Services. For example, we may collect the following information:
                    </p>
                    <ul className="list-decimal list-inside ml-4 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60 text-justify ">
                        <li>When you join our mailing list, we collect your email address. You are not required to join our mailing list to use our Services. If you wish, you may create a new email address for this purpose, and can choose not to include any identifiable information such as your name in it.</li>
                        <li>If you make an account to use our Services, for example, to make a purchase of a token, or mint an NFT, we collect your public wallet address, and whether you are using the Services as an artist, or purchaser, or both.</li>
                        <li>If you choose to create a profile, we collect your username, email address, Twitter handle, Instagram handle, other social media handles you choose to provide, website address, and if you upload one, your banner and profile picture. Providing this information is optional.</li>
                        <li>If you use the Services to create NFTs, information about the NFTs you create, and the transactions you enter, including your public wallet address, date and time of transaction, transaction value, token ID.</li>
                        <li>If you purchase NFTs using the Services, information about your transactions (amounts, dates, NFTs purchased, etc.), and your transaction history through the Services.</li>
                        <li>If required by applicable anti-money laundering and "know your client" rules, we may collect information such as your name, address and phone number, or other information required or reasonable for the purpose of such rules, and</li>
                        <li>Other information such as your communications with us, surveys, and/or other information that you choose to provide to us.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 md:ml-8 mt-8 md:mt-0">
                    <h2 className="max-w-5xl font font-medium text-[24px] md:text-[46px] leading-[1.4] md:leading-[59.8px] mb-6 text-[#317ACC]">Table of contents</h2>
                    <ul className="list-inside mb-6 font text-[16px] md:text-[24px] leading-[1.4] md:leading-[31.2px] text-[#000000]/60">
                        <li className={`ml-6 mb-2 ${pathname === "/privacy-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/privacy-policy">
                                1. Privacy policy
                            </Link>
                        </li>
                        <li className={`ml-6 mb-2 ${pathname === "/admission-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/admission-policy">
                                2. Admission Policy
                            </Link>
                        </li>
                        <li className={`ml-6 mb-2 ${pathname === "/students-expectations" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/students-expectations">
                                3. SheCanCode Learners expectations
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
