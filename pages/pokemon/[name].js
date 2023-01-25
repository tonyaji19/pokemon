import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const pokeIndex = ("000" + pokemon.id).slice(-3);
  const noIndex = pokemon.id;
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  console.log(pokemon);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li
        key={type.slot}
        className="px-5 py-2 m-1 bg-gray-200 border-4 border-[#38385c] rounded-full uppercase font-semibold mb-10"
      >
        {type.type.name}
      </li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div>
        <div key={index} className="bg-pink-200 my-4 rounded-full p-[4px]">
          <div
            className="bg-pink-500 rounded-full px-4 text-white capitalize"
            style={{ width: `${stat.base_stat}%` }}
          >
            {stat.stat.name} : {stat.base_stat}
          </div>
        </div>
      </div>
    ));

  return (
    <Layout title={pokeName}>
      <Link
        href={"/"}
        className="relative inline-block text-lg group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-20"
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800  border-2 border-gray-900 rounded-lg hover:text-[#4b497c] ">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#cab3d2]"></span>
          <span className="relative">Back</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 bg-gray-900 rounded-lg "
          data-rounded="rounded-lg"
        ></span>
      </Link>
      <div className="grid grid-cols-2 py-14 lg:px-22 md:px-10 sm:px-3">
        <div className="lg:pl-40 md:pl-20 sm:pl-6 text-white">
          <span className=" text-[50px] font-bold text-[#24243c]">
            #{noIndex}
          </span>
          <Image
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt={pokemon.name}
            width={200}
            height={200}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          />
          <div className="shadow-xl  bg-gray-200 border-4 border-slate-900 text-slate-700 rounded-xl p-5 lg:w-[20em] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
            <h1 className="w-full text-center font-bold text-[30px] ">
              Details
            </h1>

            <div className="pl-7 pt-2">
              <p className="capitalize">Species : {pokemon.name}</p>
              <p>Height : {pokemon.height}</p>
              <p>Weight : {pokemon.weight}</p>
              <div className="">
                {pokemon.abilities ? (
                  pokemon.abilities.map((item, index) => {
                    return (
                      <div key={index} className="capitalize">
                        <li>{item.ability.name}</li>
                      </div>
                    );
                  })
                ) : (
                  <h1>not yet known</h1>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-700 border-4 border-[#38385c] rounded-xl  p-5 lg:mx-14 md:mx-2 sm:mx-0">
          <ul className="flex items-center justify-center ">{renderTypes()}</ul>

          <div>{renderStats()}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
