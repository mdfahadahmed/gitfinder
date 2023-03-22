import React from "react";



const header =({ title, author}) =>{
    return (
        <div className="py-3 bg-orange-500">
            <div className="container flex justify-between mx-auto">
                <div className="text-[28px] font-bold text-white uppercase">{title}</div>
                <div className="">
                    <ul className="flex justify-between gap-4">
                        <li className="text-white text-[20px] font-normal">
                           <button className="">Home</button>
                        </li>
                        <li className="text-white text-[20px] font-normal">
                           <button className="">About</button>
                        </li>
                        <li className="text-white text-[20px] font-normal">
                           <button className="">Servise</button>
                        </li>
                        <li className="text-white text-[20px] font-normal">
                           <button className="">Contact</button>
                        </li>
                    </ul>
                </div>
                <div>
                <form className="   ">
                    <input className="h-[40px] px-2 mr-2 outline-0 my-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className=" bg-white text-orange-500 py-2 px-5 rounded-md text-[20px] font-medium" type="submit">Search</button>
                </form>
                </div>
            </div>
        </div>
    );

};

export default header






