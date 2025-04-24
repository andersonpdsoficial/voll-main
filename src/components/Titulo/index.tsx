import avaliacao from '../Titulo/assets/avaliacao.png';
import styled from 'styled-components';
import consulta from '../Titulo/assets/consulta.png';
import grafico from '../Titulo/assets/grafico.png';
import React from 'react';

interface IImagens {
    avaliacao: string;
    consulta: string;
    grafico: string;
}

type ImagemKey = keyof IImagens;

interface Props {
    imagem?: ImagemKey;
    children?: React.ReactNode;
}

const SpanEstilizado = styled.span<{ imagem?: string }>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${({ imagem }) => imagem ? `url(${imagem})` : 'none'};
`;

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`;

const ContainerEstilizado = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

function Titulo({ imagem, children }: Props) {
    const listaDeImagens: IImagens = {
        avaliacao,
        consulta,
        grafico,
    };

    const imagemUrl = imagem ? listaDeImagens[imagem] : undefined;

    return (
        <ContainerEstilizado>
            {imagemUrl && <SpanEstilizado imagem={imagemUrl} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    );
}

export default Titulo;
