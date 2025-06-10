'use client';

//ErroBounderie: captura erros não tratados, podendo ser por rota ou na raiz
import DisplayErrorMsg from "@/components/error-msg";
import { useEffect } from "react";

type ErrorPageProps = {
    error: Error,
}

export default function RootErrorPage({error}:ErrorPageProps ) {
    useEffect(() => {
    
    }, [error]);

  return (
      <DisplayErrorMsg 
      contentTitle="501" 
      content='Ocorreu um erro inesperado. Tente novamente ou mais tarde.' />
  );
}
