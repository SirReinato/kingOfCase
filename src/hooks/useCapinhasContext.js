import { useContext, useEffect } from "react";
import { CapinhasContext } from "../CapinhasContext/CapinhasContext";
import { getCapinhas } from "../servicos/capinhas";


export function useCapinhasContext() {
    const {capinhas, setCapinhas} = useContext(CapinhasContext);

    useEffect(()=>{
		pegarCapinhas()
	}, [])

	async function pegarCapinhas() {
		const capinhasApi = await getCapinhas();
		setCapinhas(capinhasApi)
	}


    return {
        capinhas,
        setCapinhas
    }
}