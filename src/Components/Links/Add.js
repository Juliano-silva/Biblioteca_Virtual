import Inputs from "../Inputs.js";
import style from '../style.module.css'
import React, { useEffect, useState } from "react";


export default function Add() {
  const array = []
  const [Api, SetApi] = useState([]);
  const [Visivel, SetVisivel] = useState(false)

  // Values
  const [Id, SetId] = useState()
  const [Name, SetName] = useState()
  const [Autor, SetAutor] = useState()
  const [Link, SetLink] = useState()
  const [Data, SetData] = useState()
  const [Image, SetImage] = useState()
  const [Categories, SetCategories] = useState()
  const [Description, SetDescription] = useState()

  function Filter() {
    var Search = document.getElementById("Search").value
    if(Search.length <= 0){
      window.location.reload(false);
      document.getElementById("Box").innerHTML = ""
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${Search}&maxResults=31`)
      .then((response) => response.json()).then((data) => {
        for (var i = 0; i < 31; i++) {
          array.push({
            "Id": i,
            "name": data.items[i].volumeInfo?.title,
            "Autor": (data.items[i].volumeInfo?.authors || [])[0],
            "Link": data.items[i].volumeInfo?.infoLink,
            "Data": data.items[i].volumeInfo?.publishedDate,
            "Image": data.items[i].volumeInfo.imageLinks?.thumbnail,
            "Categories": data.items[i]?.volumeInfo.categories,
            "Description": data.items[i]?.volumeInfo.description,
            "Adicionar": false
          })
          SetApi(array)
        }
      })
  }

  function AdicionarLivros(event) {
    var Id = event.target.id
    SetVisivel(true)
    SetName(Api[Id].name)
    SetAutor(Api[Id].Autor)
    SetLink(Api[Id].Link)
    SetId(Api[Id].Id)
    SetData(Api[Id].Data)
    SetImage(Api[Id].Image)
    SetCategories(Api[Id].Categories)
    SetDescription(Api[Id].Description)
  }

  return (
      <div>
        <h1 className={style.Titulo}>Pesquisar por um livro</h1>
        <input type="text" onChange={Filter} placeholder="Buscar por um livro" id="Search" />
        <ul className={style.Box} id="Box">
          {
            Api.map(item =>
              <div className={style.OuterBox} id={"Div" + item.Id} key={item.Id}>
                <img src={item.Image} alt="" />
                <div className={style.Itens}>
                <h1>{item.name}</h1>
                <h6>{item.Autor}</h6>
                <p>{item.Data}</p>
                <h3>{item.Categories}</h3>
                <p>{item.Description}</p>
                <a href={item.Link} target="_blank">Comprar</a>
                <button id={item.Id} onClick={AdicionarLivros}>+ Adicionar a Coleção</button>
                </div>
              </div>
            )
          }
          {Visivel && <Inputs
            name={Name}
            autor={Autor}
            data={Data}
            img={Image}
            link={Link}
            categories={Categories}
            description={Description}
          />
          }
        </ul>
    </div>
  );
}