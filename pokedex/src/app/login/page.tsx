import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import BackButton from "@/components/backButton";

export default function Login() {
    return (
        <div className="flex min-h-screen flex-col items-center text-white bg-[#ffc000]">
            <div className="flex px-5 pt-5 w-full h-screen">
                <div className="flex flex-col w-full justify-center items-center  h-full md:px-20 md:py-5">
                    <BackButton />
                    <div className="flex-col max-w-96 w-full h-full items-center justify-center">
                        <div className="flex w-full h-1/6 items-center font-extrabold tracking-tight text-[40px] ">SIGN IN</div>
                        <div className="flex-col grow w-full h-5/6 ">
                            <form>
                                <Input name="email" className="w-full h-12 text-sm" type="email" placeholder="Email" />
                                <Input name="password" className="w-full h-12 text-sm mt-8" type="password" placeholder="Password" />
                                <Button type="submit" className="mt-8 text-xs tracking-widest">SIGN IN</Button>
                            </form>
                            <Link href="/register" className="flex mt-8 pl-2 text-xs tracking-widest link link-hover">
                                Doesn&apos;t have account? Register Here
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}