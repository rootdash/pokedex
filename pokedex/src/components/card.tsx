import { IoMdClose } from "react-icons/io";

export default function Card() {
    return (
        <div className="relative flex flex-col items-center w-44 h-auto bg-white rounded-2xl shadow-lg p-5 m-3">
            <div className="absolute top-2 right-2">
                <IoMdClose className="w-6 h-6 text-black" />
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" className="w-full h-40 object-contain" />
            <h1 className="text-xl font-bold text-black">Pikachu</h1>
        </div>
    );
}