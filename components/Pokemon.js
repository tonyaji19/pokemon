import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon, index }) => {
  const pokeIndex = ("000" + (index + 1)).slice(-3);
  const noIndex = index + 1;

  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-130 duration-000">
      <Link href={`/pokemon/${pokemon.name}`}>
        <div className="bg-[#fdcde1] hover:bg-[#bfa3c8] rounded-3xl p-2 flex flex-col justify-center items-center relative ">
          <Image
            alt={pokemon.name}
            width={180}
            height={180}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          />

          <div className="font-quicksand py-4 flex gap-3 justify-between items-center">
            <span className="uppercase font-bold text-gray-800 text-xl">
              {pokemon.name}
            </span>
            <span className=" text-xl text-gray-700 font-bold">#{noIndex}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
