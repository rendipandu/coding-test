import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse } from "next/server";
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id");
    if (id) {
        const detailPokemon = await retrieveDataById("pokemons", id);
        if (detailPokemon) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailPokemon,
            });
        }

        return NextResponse.json({
            status: 400,
            message: "Not Found",
            data: {},
        });
    }

    const pokemons = await retrieveData("pokemons");

    return NextResponse.json({ status: 200, message: "Success", data: pokemons });
}