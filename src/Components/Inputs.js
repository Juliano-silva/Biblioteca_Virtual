import React from 'react';
import style from './style.module.css'
var array = []
function SalvarLivros(){
    if(localStorage.LivrosApi){
        array = JSON.parse(localStorage.getItem("LivrosApi"))
    }

    array.push({
        "Id": JSON.parse(localStorage.getItem("LivrosApi"))?.length || 0,
        "Name": document.getElementById("name").value,
        "Autor": document.getElementById("autor").value,
        "Data": document.getElementById("data").value,
        "Img": document.getElementById("img").value,
        "Link": document.getElementById("link").value,
        "Categories": document.getElementById("categories").value,
        "Description": document.getElementById("description").value,
    })
    
    localStorage.LivrosApi = JSON.stringify(array)
}

function Fechar(){
    window.location.reload(false);
}

function Inputs({name,autor,data,img,link,categories,description}){
    return(
        <div id='InputsContainer' className={style.InputsContainer}>
            <button className={style.Fechar} onClick={Fechar}>X</button>
            <h1 className={style.Titulo}>Adicionar um Livro</h1>
            <input type="text" id="name" placeholder='Digite o Nome' value={name}/>
            <input type="text" id="autor" placeholder='Digite o Autor' value={autor}/>
            <input type="text" id="data" placeholder='Digite a Data' value={data}/>
            <input type="text" id="img"  placeholder='Digite a Image' value={img}/>
            <input type="text" id="link"  placeholder='Digite o Link' value={link}/>
            <input type="text" id="categories"  placeholder='Digite a Categoria' value={categories}/>
            <input type="text" id="description" placeholder='Digite a descrição' value={description}/>
            <button className={style.Salvar} onClick={SalvarLivros}>Enviar</button>
        </div>
    )
}

export default Inputs