"use client"
import React from 'react';
import { useRouter, usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/about', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Blog', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname();

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                    Okoh International
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center">
                                <div className="">
                                    <ul className="flex justify-end space-x-4">
                                        <li className={pathname == "/" ? "text-green-300 hover:text-green-300 transition delay-150 duration-300" : ""}><Link href={"/"}>Home</Link></li>
                                        <li className={pathname == "/about" ? "text-green-300 hover:text-green-300 transition delay-150 duration-300" : ""}><Link href={"/about"}>About Us</Link></li>
                                        <li className={pathname == "/services" ? "text-green-300 hover:text-green-300 transition delay-150 duration-300" : ""}><Link href={"/about"}>Services</Link></li>
                                        <li className={pathname == "/products" ? "text-green-300 hover:text-green-300 transition delay-150 duration-300" : ""}><Link href={"/about"}>Our Products</Link></li>
                                        <li className={pathname == "/blog" ? "text-green-300 hover:text-green-300 transition delay-150 duration-300" : ""}><Link href={"/about"}>Blog</Link></li>
                                    </ul>
                                    {/* {navigation.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={classNames(
                                                link.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={link.href ? 'page' : undefined}
                                        >
                                            {link.name}
                                        </Link>
                                    ))} */}
                                    
                                </div>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
