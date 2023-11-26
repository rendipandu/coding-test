"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const PokeCard = ({ name, url, }) => {

    return (
        <div className="pokemon_card">
            <div>
                <Image
                    src={url}
                    alt={name}
                    width={100}
                    height={100}
                    loading="lazy"
                />
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default PokeCard;