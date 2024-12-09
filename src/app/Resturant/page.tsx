import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";

export default function Resturant() {
    return (
        <>
            <div className="w-full h-[6000] bg-black absolute px-5 py-5">
                <div>
                    <div className="max-w-screen-lg mx-auto h-auto relative">
                        <div className="text-orange-500 text-center font-['Helvetica'] text-lg sm:text-xl md:text-2xl pt-4">
                            Food<span className="text-white leading-tight">tuck</span>
                        </div>
                        <div className=" w-full mt-4 flex flex-col md:flex-row justify-around items-center">

                            <div className="flex gap-4 text-sm sm:text-base text-white items-center">
                                {/* Home */}
                                <div className="flex flex-col items-center">
                                    <span className="mt-1">
                                        <span className="block sm:hidden cursor-pointer">Home</span>
                                        <span className="hidden sm:block cursor-pointer">Home</span>
                                    </span>
                                    <span className="w-1 h-1 bg-slate-400 rounded-full "></span>
                                </div>

                                {/* Menu */}
                                <span>
                                    <span className="block sm:hidden cursor-pointer">Menu</span>
                                    <span className="hidden sm:block cursor-pointer">Menu</span>
                                </span>

                                {/* Blog */}
                                <span>
                                    <span className="block sm:hidden cursor-pointer">Blog</span>
                                    <span className="hidden sm:block cursor-pointer">Blog</span>
                                </span>

                                {/* Pages */}
                                <span>
                                    <span className="block sm:hidden cursor-pointer">Pages</span>
                                    <span className="hidden sm:block cursor-pointer">Pages</span>
                                </span>

                                {/* About */}
                                <div className="flex">
                                    <span>
                                        <span className="block sm:hidden cursor-pointer">About</span>
                                        <span className="hidden sm:block cursor-pointer">About</span>
                                    </span>
                                    {/* <Image 
                                src={"/images/arrow.png"}
                                alt="Arrow"
                                width={15}
                                height={10}
                                className="fill-white bg-white"
                                /> */}
                                </div>

                                {/* Shop */}
                                <span>
                                    <span className="block sm:hidden cursor-pointer">Shop</span>
                                    <span className="hidden sm:block cursor-pointer">Shop</span>
                                </span>

                                {/* Contact */}
                                <span>
                                    <span className="block sm:hidden cursor-pointer">Contact</span>
                                    <span className="hidden sm:block cursor-pointer">Contact</span>
                                </span>
                            </div>



                            <div className="flex gap-4 items-center mt-4 md:mt-0">
                                <div className="flex items-center w-[200px] max-w-40 h-8 rounded-2xl border border-orange-500 px-5">
                                    <p className="text-xs sm:text-sm text-white flex-grow">search...</p>
                                    <Search className="w-4 sm:w-5 text-white cursor-pointer" />
                                </div>
                                <ShoppingBag className="w-5 sm:w-6 text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto relative flex flex-wrap md:flex-nowrap justify-around items-center gap-4 p-5">
                        {/* Left Section */}
                        <div className="w-full md:w-[500px] h-auto relative">
                            <div className="flex gap-10">
                                {/* Vertical Icons */}
                                <div className="h-[300px] w-[15px] py-3">
                                    <div className="flex flex-col w-[2px] h-[100px] bg-white relative left-1"></div>
                                    <div>
                                        <Twitter className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div>
                                        <Facebook className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div>
                                        <Linkedin className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div className="flex flex-col w-[2px] h-[100px] bg-white relative left-1"></div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <div className="font-bold text-[25px] leading-[50px] text-orange-500"> It&apos;s Quick & Amusing!</div>
                                    <div className="text-[41px] font-serif font-semibold leading-[50px] mt-5 text-white">
                                        <span className="text-orange-500">Th</span>e Art of Speed Food Quality
                                    </div>
                                    <div className="text-[10px] text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, voluptatibus laboriosam quam assumenda eius distinctio, quaerat unde voluptates reprehenderit aspernatur sit earum sint ipsum sapiente dolores. Eaque, sed debitis.
                                    </div>
                                    <Button variant={"default"} className="border border-white hover:border-orange-500 rounded-3xl mt-3 px-5">
                                        See Menu
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/img2.jpg"
                                alt="image"
                                width={350}
                                height={300}
                                className="w-full h-[300px] md:w-[350px] md:h-[300px] rounded-md shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 mt-16">
                    {/* Text Section */}
                    <div className="w-full md:w-[400px] h-auto p-2">
                        <h1 className="font-greatVibes text-orange-500">About Us</h1>
                        <h1 className="text-white text-[35px] leading-9 my-4">
                            <span className="text-orange-500">We</span> Create the best foody product
                        </h1>
                        <p className="text-white text-[10px] mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste, quae sunt voluptates maiores blanditiis! Fuga at sunt, fugit officia quae placeat, repellat numquam aliquid provident necessitatibus, est rerum perferendis.
                        </p>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">Lacus nisi, et ac dapibus sit eu in consequat.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">
                                Quisque diam pellentesque bibendum non dui volupat fringilla.
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <Button variant={"default"} className="rounded-3xl mt-2">
                            Read More
                        </Button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-[400px] h-auto">
                        <div className="w-full h-[150px] mb-2">
                            <Image
                                src={"/images/f3.jpg"}
                                alt="Food"
                                width={400}
                                height={150}
                                className="w-full h-[150px] object-cover"
                            />
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap gap-2">
                            <div className="w-full md:w-1/2 h-[150px]">
                                <Image
                                    src={"/images/f1.jpg"}
                                    alt="Food"
                                    width={225}
                                    height={150}
                                    className="w-full h-[150px] object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 h-[150px]">
                                <Image
                                    src={"/images/f2.jpg"}
                                    alt="Food"
                                    width={225}
                                    height={150}
                                    className="w-full h-[150px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto text-center leading-10 text-white mt-16">
                    <div className="font-greatVibes">Food Category</div>
                    <div className="text-[25px] mb-3">
                        <span className="text-orange-500">Ch</span>oose Food Item
                    </div>

                    {/* Images in a row for larger screens, column for mobile */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        <div className="w-[200px] h-[200px]">
                            <Image
                                src={"/images/f7.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[200px] h-[200px]">
                            <Image
                                src={"/images/f12.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[200px] h-[200px]">
                            <Image
                                src={"/images/f10.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[200px] h-[200px]">
                            <Image
                                src={"/images/f6.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 px-5 py-5 mt-16 ">
                    {/* Image Grid */}
                    <div className="flex flex-col gap-2 lg:w-1/2">
                        <div className="flex gap-2">
                            <div className="w-1/2 h-[200px]">
                                <Image
                                    src={"/images/f4.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="w-1/2 h-[200px]">
                                <Image
                                    src={"/images/f11.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-[150px] rounded-lg relative top-[50px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-1/3 h-[200px]">
                                <Image
                                    src={"/images/f10.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="w-1/3 h-[200px]">
                                <Image
                                    src={"/images/f9.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="w-1/3 flex flex-col gap-2">
                                <div className="h-[95px]">
                                    <Image
                                        src={"/images/f8.jpg"}
                                        alt="Food"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                                <div className="h-[95px]">
                                    <Image
                                        src={"/images/f6.jpg"}
                                        alt="Food"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-white lg:w-1/2">
                        <h1 className="text-start text-[20px] font-greatVibes text-orange-500">
                            Why Choose Us
                        </h1>
                        <h1 className="text-start font-bold text-[25px]">
                            <span className="text-orange-500">Ex</span>tra Ordinary Tasted and Experienced
                        </h1>
                        <p className="text-start text-[10px] leading-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam
                            odit, quam, nemo, laboriosam dolorum tempora optio vel vitae obcaecati
                            consequatur qui perspiciatis odio excepturi nam alias aliquid iste
                            numquam?
                        </p>
                        <div className="flex gap-3">
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wburger.png"}
                                        alt="Burger"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Fast Food</p>
                            </div>
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wcookie.png"}
                                        alt="Cookie"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Lunch</p>
                            </div>
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wdrink.png"}
                                        alt="Drink"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Dinner</p>
                            </div>
                        </div>
                        <div className="bg-orange-500 w-[250px] h-[60px] mt-3 cursor-pointer">
                            <div className="bg-white w-[230px] h-[60px] relative left-5 px-5 flex items-center justify-around">
                                <h1 className="text-[27px] text-orange-500 font-bold">30+</h1>
                                <div className="leading-4 text-start">
                                    <p className="text-[12px] text-gray-500">Years of</p>
                                    <p className="text-[14px] font-bold text-black">Experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" w-full h-auto p-1 relative md:flex-col sm:flex-col mt-16">
                    {/* Wrapper for images and overlay content */}
                    <div className="relative w-full h-auto flex lg:flex-col justify-evenly items-center">
                        {/* Individual image + overlay container */}
                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f1.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wchef.png"}
                                    alt="Chefs"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Professional Chef</p>
                                <p className="text-white text-center font-bold text-[25px]">420</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f6.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/WBurger.png"}
                                    alt="Burger"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Items of Food</p>
                                <p className="text-white text-center font-bold text-[25px]">320</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f2.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wfork.png"}
                                    alt="Fork"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Years of Experienced</p>
                                <p className="text-white text-center font-bold text-[25px]">30+</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f5.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wpizza.png"}
                                    alt="Pizza"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Happy Customer</p>
                                <p className="text-white text-center font-bold text-[25px]">220</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" w-full px-4 md:px-16 py-14 flex flex-col items-center justify-center mt-16">
                    {/* Header Section */}
                    <p className="font-greatVibes text-orange-500 text-center text-[20px]">Choose & pick</p>
                    <p className="text-center text-white text-[30px] font-bold mb-5">
                        <span className="text-orange-500">Fr</span>om Our Menu
                    </p>

                    {/* Menu Categories */}
                    <div className="flex flex-wrap justify-center gap-3 text-white text-[14px] w-full">
                        <p className="cursor-pointer text-orange-500">Breakfast</p>
                        <p className="cursor-pointer">Lunch</p>
                        <p className="cursor-pointer">Dinner</p>
                        <p className="cursor-pointer">Drink</p>
                        <p className="cursor-pointer">Snack</p>
                        <p className="cursor-pointer">Soups</p>
                    </div>

                    {/* Menu Content */}
                    <div className="w-full h-full flex flex-col md:flex-row gap-5 mt-8 relative">
                        {/* Large Image */}
                        <div className="w-full md:w-[230px] h-[300px] flex-shrink-0">
                            <Image
                                src="/images/f8.jpg"
                                alt="Food"
                                layout="responsive"
                                width={280}
                                height={300}
                                className=""
                            />
                        </div>

                        {/* Menu Items */}
                        <div className="w-full flex flex-wrap grid-rows-2 gap-3">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="flex flex-wrap sm:flex-row gap-3">
                                    <div className="bg-black w-full sm:w-[300px] h-[60px] px-2 flex items-center gap-3">
                                        <div className="bg-white w-[50px] h-[50px]">
                                            <Image
                                                src={`/images/f${index + 1}.jpg`}
                                                alt={`Food ${index + 1}`}
                                                width={50}
                                                height={50}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <div className="text-white">
                                            <p className="text-[13px] font-bold">Food Item {index + 1}</p>
                                            <p className="text-gray-400 text-[10px]">Delicious and tasty.</p>
                                            <p className="text-orange-500 text-[10px]">$12.55</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full mt-16  px-5 py-5">
                    <div className="text-white text-center space-y-6 leading-3">
                        {/* Title Section */}
                        <h1 className="font-greatVibes text-[20px] sm:text-[24px]">Chefs</h1>
                        <h1 className="text-[20px] sm:text-[30px]">
                            <span className="text-orange-500">Me</span>et Our Chef
                        </h1>

                        {/* Chefs Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                            {/* Chef 1 */}
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef1.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">D.Estwood</p>
                                    <p className="text-[10px] sm:text-[12px]">Chief Chef</p>
                                </div>
                            </div>

                            {/* Chef 2 */}
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef2.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">D.Dcoriesh</p>
                                    <p className="text-[10px] sm:text-[12px]">Assistant Chef</p>
                                </div>
                            </div>

                            {/* Chef 3 */}
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef3.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">M.William</p>
                                    <p className="text-[10px] sm:text-[12px]">Advertising Chef</p>
                                </div>
                            </div>

                            {/* Chef 4 */}
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef4.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">W.ReadFroad</p>
                                    <p className="text-[10px] sm:text-[12px]">Chef</p>
                                </div>
                            </div>
                        </div>

                        {/* Button Section */}
                        <Button className="mt-6 bg-black text-white text-[10px] sm:text-[12px] border border-orange-500 hover:bg-orange-500 hover:text-white rounded-3xl px-4 py-2">
                            See More
                        </Button>
                    </div>
                </div>


                <div className="mt-10 w-full px-5 sm:px-16 py-5 text-white">
                    <h1 className="text-orange-500 font-greatVibes text-[20px] sm:text-[24px]">Testimonials</h1>
                    <h1 className="text-[18px] sm:text-[23px] font-bold">What our client are saying</h1>

                    {/* Card Section */}
                    <div className="flex justify-center items-center mt-14">
                        <div className="relative w-full max-w-sm sm:max-w-md h-auto bg-white rounded-lg shadow-lg p-6">
                            {/* Image - Partially inside and outside */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                <img
                                    src="/images/person.jpg"
                                    alt="Profile"
                                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full shadow-md"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="text-center mt-12 sm:mt-14">
                                <h1 className="text-orange-500 text-[50px] sm:text-[80px] leading-[50px] sm:leading-[80px]">,,</h1>
                                <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at dicta possimus cum libero magni ducimus unde impedit qui. Ratione deleniti dicta voluptatem modi quos veniam facilis quae fugit ipsum?
                                </p>
                                <div className="flex justify-center items-center mt-2 mb-2">
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-gray-500 w-4 sm:w-7" />
                                </div>
                                <h1 className="text-black font-bold text-[16px] sm:text-[20px]">Alamin Hasan</h1>
                                <p className="text-gray-500 text-[8px] sm:text-[10px]">Food Specialist</p>
                            </div>
                        </div>
                    </div>

                    {/* Dots for Navigation */}
                    <div className="flex justify-center items-center gap-1 mt-5">
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                    </div>
                </div>


                <div className="w-full h-screen mt-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/f2.jpg)' }}>
                    <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay for better text visibility */}
                    <div className="relative h-full flex items-center justify-end px-10 sm:px-16">
                        <div className="text-white text-right space-y-4 max-w-lg">
                            <h1 className="font-greatVibes text-orange-500 text-[20px]">Restaurant Active Process</h1>
                            <h1 className="text-2xl sm:text-4xl font-bold text-center">We Document Every Food Bean Process untile it is saved</h1>
                            <p className="text-[10px] sm:text-[12px] text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, minus, earum ipsa quia possimus omnis sit quos perspiciatis incidunt cumque quisquam. Libero labore soluta praesentium, et modi inventore repudiandae unde!
                            </p>
                           <div className="flex gap-10 justify-end items-center">
                            <Button variant={"default"} className="bg-transparent border border-orange-500">Read More</Button>
                           <div className="flex gap-2 items-center">
                            <PlayCircleIcon className="text-white fill-orange-500 size-10 sm:size-12 hover:fill-black cursor-pointer"/>
                            <p className="text-[13px]">Play Video</p>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>


                <div className="mt-16 w-full h-auto py-8">
                    <div className="px-5 sm:px-16 text-center text-white">
                        <h1 className="font-greatVibes text-[20px] sm:text-[24px]">Blog Post</h1>
                        <h1 className="text-[18px] sm:text-[30px]">
                            <span className="text-orange-500">La</span>test News & Blog
                        </h1>

                        {/* Blog Cards */}
                        <div className="flex flex-wrap justify-center gap-4 mt-5">
                            {/* Blog Card 1 */}
                            <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                                <div className="w-full h-[160px]">
                                    <Image
                                        src={"/images/f3.jpg"}
                                        alt="Burger"
                                        width={100}
                                        height={100}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                    <p className="text-orange-500">10 February 2022</p>
                                    <p className="text-[14px] text-white leading-4">
                                        Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                    </p>
                                    <div className="flex justify-between items-center text-[12px]">
                                        <p>Learn More</p>
                                        <div className="flex gap-1">
                                            <ThumbsUp className="w-[15px]" />
                                            <MessageSquareMore className="w-[15px]" />
                                            <GitCompareArrows className="w-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Card 2 */}
                            <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                                <div className="w-full h-[160px]">
                                    <Image
                                        src={"/images/f5.jpg"}
                                        alt="Burger"
                                        width={100}
                                        height={100}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                    <p className="text-orange-500">10 February 2022</p>
                                    <p className="text-[14px] text-white leading-4">
                                        Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                    </p>
                                    <div className="flex justify-between items-center text-[12px]">
                                        <p>Learn More</p>
                                        <div className="flex gap-1">
                                            <ThumbsUp className="w-[15px]" />
                                            <MessageSquareMore className="w-[15px]" />
                                            <GitCompareArrows className="w-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Card 3 */}
                            <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                                <div className="w-full h-[160px]">
                                    <Image
                                        src={"/images/f6.jpg"}
                                        alt="Burger"
                                        width={100}
                                        height={100}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                    <p className="text-orange-500">10 February 2022</p>
                                    <p className="text-[14px] text-white leading-4">
                                        Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                    </p>
                                    <div className="flex justify-between items-center text-[12px]">
                                        <p>Learn More</p>
                                        <div className="flex gap-1">
                                            <ThumbsUp className="w-[15px]" />
                                            <MessageSquareMore className="w-[15px]" />
                                            <GitCompareArrows className="w-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full  mt-16 px-5 sm:px-16 py-10">
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
                        <div className="mb-5 sm:mb-0 text-white">
                            <h1 className="text-[16px] sm:text-[20px] font-bold">
                                <span className="text-orange-500">St</span>ill You need our Support?
                            </h1>
                            <p className="text-[10px] sm:text-[12px] text-gray-400">
                                Don't wait, make a smart & logical quote here. It's pretty easy.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-full sm:w-[250px] h-[40px] bg-orange-400 rounded-md text-white flex justify-between items-center">
                                <p className="px-3 text-[10px]">Enter Your Email</p>
                                <div className="bg-white w-[80px] h-[40px] text-orange-400 rounded-sm text-[10px] flex items-center justify-center">
                                    Subscribe Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-orange-400 my-8" />
                    <div className="bg-black w-full p-2 flex flex-wrap gap-5 sm:flex-nowrap">
                        {/* About Us */}
                        <div className="text-white p-1 w-full sm:w-[170px] space-y-5">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">About Us</h1>
                            <p className="text-[10px] sm:text-[12px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum
                                in perspiciatis nihil accusamus aperiam nobis esse eum, nesciunt libero
                                dolorem provident facere facilis incidunt eos.
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px] flex items-center justify-center">
                                    <Clock10Icon />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-[12px] font-bold">Opening Hours</p>
                                    <p className="text-[8px] sm:text-[10px]">Mon - Sat(8:00 - 6:00)</p>
                                    <p className="text-[8px] sm:text-[10px]">Sunday - Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="text-white p-1 w-full sm:w-[150px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Useful Links</h1>
                            <ul className="text-[10px] sm:text-[12px] space-y-2">
                                <li className="cursor-pointer hover:text-orange-400">About</li>
                                <li className="cursor-pointer hover:text-orange-400">News</li>
                                <li className="cursor-pointer hover:text-orange-400">Partners</li>
                                <li className="cursor-pointer hover:text-orange-400">Team</li>
                                <li className="cursor-pointer hover:text-orange-400">Menu</li>
                                <li className="cursor-pointer hover:text-orange-400">Contacts</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div className="text-white p-1 w-full sm:w-[150px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Help?</h1>
                            <ul className="text-[10px] sm:text-[12px] space-y-2">
                                <li className="cursor-pointer hover:text-orange-400">FAQ</li>
                                <li className="cursor-pointer hover:text-orange-400">Terms & Conditions</li>
                                <li className="cursor-pointer hover:text-orange-400">Reporting</li>
                                <li className="cursor-pointer hover:text-orange-400">Documentation</li>
                                <li className="cursor-pointer hover:text-orange-400">Support Policy</li>
                                <li className="cursor-pointer hover:text-orange-400">Privacy</li>
                            </ul>
                        </div>

                        {/* Recent Post */}
                        <div className="text-white p-1 w-full sm:w-[170px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Recent Post</h1>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f4.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f7.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f10.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-600 space-y-1 text-white mt-5 py-4 flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center px-4">
                        <p className="text-[10px] sm:text-[12px]">
                            Copyright @ 2022 by Tahira. All Rights Reserved.
                        </p>
                        <div className="flex gap-3 ">
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <FacebookIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <InstagramIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <GithubIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <LinkedinIcon className="fill-slate-600" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}