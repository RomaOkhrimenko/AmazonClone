import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/*TOP NAV*/}
            <div className={"flex items-center bg-amazon_blue p-1 flex-grow py-2"}>
                <div className={'mt-2 flex items-center flex-grow sm:flex-grow-0'}>
                    <Image
                        src={'https://links.papareact.com/f90'}
                        width={150}
                        height={40}
                        objectFit={"contain"}
                        className={"cursor-pointer"}
                    />
                </div>

            {/*  Search  */}
                <div className={'hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500'}>
                    <input className={'p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'} type="text" />
                    <SearchIcon className={"h-12 p-4"} />
                </div>

            {/*  Right  */}
                <div className={"flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap"}>

                    <div className={'link'}>
                        <p>Hello, Roma Okhrim</p>
                        <p className={'font-extrabold md:text-sm'}>Account & Lists</p>
                    </div>

                    <div className={'link'}>
                        <p>Returns</p>
                        <p className={'font-extrabold md:text-sm'}>& Orders</p>
                    </div>

                    <div className={'relative link flex items-center'}>

                        <span className={'absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'}>0</span>

                        <ShoppingCartIcon className={"h-10"} />
                        <p className={'hidden md:inline font-extrabold md:text-sm mt-2'}>Basket</p>
                    </div>
                </div>

            </div>
            {/*BOTTOM NAV*/}
            <div className={'flex items-center soace-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'}>
                <p className={'link flex items-center pr-2'}>
                    <MenuIcon className={"h-6 mr-1"}/>
                    All
                </p>
                <p className={"link pr-2"}>Prime Video</p>
                <p className={"link pr-2"}>Amazon Business</p>
                <p className={"link pr-2"}>Today's Deals</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Electronics</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Food & Grocery</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Prime</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Buy Again</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Shopper Toolkit</p>
                <p className={'link hidden lg:inline-flex pr-2'}>Health & Personal</p>
            </div>
        </header>
    );
}

export default Header;