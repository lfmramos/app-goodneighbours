'use client'
import ProfileCard from "@/components/ProfileCard";
export default function Form() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-4">
                <ProfileCard/>
            </div>
        </div>
    )
}