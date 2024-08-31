import BackButton from "@/components/backButton";
import Card from "@/components/card";

export default function Favorite() {

    return (
        <div className="flex min-h-screen flex-col items-center text-white bg-[#ffc000]">
            <div className="flex px-5 pt-5 w-full h-auto">
                <div className="flex flex-col w-full items-center h-full md:px-20 md:py-5 ">
                    <div className="flex w-full">
                        <BackButton />
                    </div>
                    <div className="flex w-full h-auto  justify-center items-center flex-wrap">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}