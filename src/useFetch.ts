import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`/api/${url}`)
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados))
      .catch((erro) => setErro(erro.message || "Erro ao buscar dados"));
  }, [url]);

  return { dados, erro };
}