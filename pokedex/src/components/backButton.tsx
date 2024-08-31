'use client'

import { useRouter } from 'next/navigation';
import { IoReturnUpBackSharp } from 'react-icons/io5';

export default function BackButton() {
    const router = useRouter();
    return (
        <div className="flex w-full h-10 items-center justify-start">
            <button onClick={() => router.back()} className="flex text-xs tracking-widest link link-hover">
                <IoReturnUpBackSharp className="flex h-10 w-10 " />
            </button>
        </div>
    )
}