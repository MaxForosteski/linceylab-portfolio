"use client"

import RobotHeader from "./RobotHeader";
import HeaderBackground from "./HeaderBackground";
export default function Header() {
    return (
        <>
            <HeaderBackground />
            <div className="fixed inset-0 z-0 bg-blue-700 opacity-50"></div>
            <div className="h-[100vh] bg-white text-black flex pl-[5%] items-center">

                <p className="text-4xl">aaaaaaaaaaaaaaa eu programo em java</p>

            </div>
        </>
    );
}