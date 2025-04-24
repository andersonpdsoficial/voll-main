import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch('https://api.npoint.io/084ddaa5a39b05fc6b1b')
            .then(resposta => resposta.json())
            .then(dados => setDados(dados))
            .catch(erro => setErro(erro.message));
    }, [url]);

    return { dados, erro };
}