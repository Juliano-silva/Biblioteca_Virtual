import React, { useEffect, useState } from "react";
import style from '../style.module.css'

const getLocalStorage = () => {
  let LivrosApi = localStorage.getItem("LivrosApi")
  if (LivrosApi) {
    return (LivrosApi = JSON.parse(localStorage.getItem("LivrosApi")))
  } else {
    return [];
  }
}
function Remover(event) {
  var Remover
  if (localStorage.getItem("LivrosApi") == null) {
    Remover = []
  } else {
    Remover = JSON.parse(localStorage.getItem("LivrosApi"))
  }
  Remover.splice(event.target.id, 1)
  localStorage.setItem("LivrosApi", JSON.stringify(Remover))
  window.location.reload(false);
}

const Filtar = () => {
  var Conteudo = document.getElementById("ConteudoBuscar")
  var FiltrarText = document.getElementById("FiltrarText")
  let Value = FiltrarText.value;
  let Linhas = Conteudo.getElementsByTagName("div")
  console.log(Linhas);
  for (let position in Linhas) {
    if (true === isNaN(position)) {
      continue;
    }
    let ConteudoLinha = Linhas[position].innerHTML

    if (true === ConteudoLinha.includes(Value)) {
      Linhas[position].style.display = ''
    } else {
      Linhas[position].style.display = 'none'
    }
  }
}

export default function Books() {
  const [Api, setApi] = useState(getLocalStorage())
  return (
    <div className={style.BooksContainer}>
      <input type="text" id="FiltrarText" onKeyUp={Filtar} placeholder="Filtrar Livros" />
      <div id="ConteudoBuscar">
      {Api.length > 0 && (Api.map(itens => <div>
        <img src={itens.Img} alt="" />
        <div className={style.Itens}>
          <h1>{itens.Name}</h1>
          <h6>{itens.Autor}</h6>
          <p>{itens.Data}</p>
          <h3>{itens.Categories}</h3>
          <p>{itens.Description}</p>
          <a href={itens.Link} target="_blank">Comprar</a>
        </div>
        <button onClick={Remover} id={itens.Id} className={style.Apagar}>Apagar</button>
      </div>)) || <h1 className={style.Titulo}>Nenhum item aqui</h1>}
      </div>
    </div>
  );
}