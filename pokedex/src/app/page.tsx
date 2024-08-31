"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FaRegHeart } from "react-icons/fa";

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
}

const typeColors: { [key: string]: string } = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
};

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState<string>("pikachu");

  const fetchPokemon = async (pokemonName: string): Promise<void> => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data: Pokemon = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    fetchPokemon(search);
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchPokemon(search);
  };

  const getBackgroundColor = (): string => {
    if (!pokemon) return "#ffc000";
    const primaryType = pokemon.types[0]?.type.name;
    return typeColors[primaryType] || "#ffc000";
  };

  return (
    <main className="flex min-h-screen flex-col items-center text-white" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="flex w-full h-1/6 justify-between p-2 items-center md:h-1/5">
        <div className="flex-col h-full w-1/2 px-4 lg:pt-10">
          <h1 className="flex h-1/2 text-xs font-extrabold tracking-wider items-end md:text-xl">
            {pokemon ? `#${pokemon.id}` : "#---"}
          </h1>
          <p className="flex h-1/2 text-xl font-extrabold tracking-wider md:text-4xl">
            {pokemon ? pokemon.name : "Loading..."}
          </p>
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full md:p-4">
          <div className="flex h-1/2 w-full items-start justify-end">
            <Link href="/login" className="flex text-sm font-semibold tracking-widest md:text-lg">
              Sign In
            </Link>
          </div>
          <div className="flex h-1/2 w-full justify-end">
            <Link href="/favorite">
              <FaRegHeart className="flex h-10 w-full md:w-14 md:h-14" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full h-3/6 justify-center items-center">
        {pokemon && (
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-auto h-full"
          />
        )}
      </div>
      <div className="flex w-full h-full items-center p-5">
        <div className="flex flex-col h-full w-2/6 justify-start items-start">
          <div className="flex w-full text-sm font-semibold py-3 tracking-widest justify-center items-center md:text-xl">
            Height-
            <div className="flex text-sm font-normal tracking-widest md:text-xl">
              {pokemon ? `${pokemon.height / 10} m` : "---"}
            </div>
          </div>
          <div className="flex w-full text-sm font-semibold py-3 tracking-widest justify-center items-center md:text-xl">
            Weight-
            <h1 className="flex text-sm font-normal tracking-widest items-end md:text-xl">
              {pokemon ? `${pokemon.weight / 10} kg` : "---"}
            </h1>
          </div>
          <div className="flex w-full text-sm font-semibold py-3 tracking-widest justify-center items-center md:text-xl">
            Type-
            <h1 className="flex text-sm font-normal tracking-widest items-end md:text-xl">
              {pokemon ? pokemon.types.map((type) => type.type.name).join(", ") : "---"}
            </h1>
          </div>
        </div>
        <div className="flex-col h-full w-4/6 px-4">
          <h1 className="flex h-1/6 text-lg font-extrabold tracking-wider md:text-2xl">Bio</h1>
          <p className="flex h-5/6 text-sm font-normal text-pretty tracking-wider md:text-xl">
            {pokemon
              ? `Whenever ${pokemon.name} comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.`
              : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex w-full h-1/6 justify-center items-center py-5">
        <form onSubmit={handleSearchSubmit} className="flex w-full justify-center">
          <Input
            placeholder="Search Pokémon..."
            value={search}
            onChange={handleSearchChange}
            className="flex max-w-96 w-full rounded-full text-center outline outline-1 outline-white text-sm font-medium italic tracking-widest"
          />
        </form>
      </div>
    </main>
  );
}