import { Bug } from "phosphor-react";
import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

import './styles/main.css';

export default function ErrorPage() {
  const [errorText, setErrorText] = useState('Undefined')
  const error: any = useRouteError();
  console.error(error);

  useEffect(() => {
    if (error.status === 404) {
      setErrorText('A página não foi encontrada.')
    }
  }, [])

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center gap-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-300"
    >
      <Bug className="text-5xl" weight="thin" />
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Desculpa, aconteceu um problema...</p>
      <p>
        <i className="text-violet-300">{errorText}</i>
      </p>
    </div>
  );
}