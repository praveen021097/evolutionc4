async function apiCall(url) {


    //add api call logic here

    let res=await fetch(url);
    let data=await res.json();
    return data;


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(elem=>{
        let divContainer=document.createElement("div");
        divContainer.setAttribute("id","divcontainer")
        let div1=document.createElement("div");
        div1.setAttribute("id","div1")
        let div2=document.createElement("div");
        div2.setAttribute("id","div2")
        let div3=document.createElement("div");
        div3.setAttribute("id","div3")
        let Title=document.createElement("p");

        Title.innerText=elem.title;
        div1.append(Title);

        let Desc=document.createElement("p");
        Desc.innerText=elem.description;
        div2.append(Desc);

        let img=document.createElement("img");
        img.src=elem.urlToImage;
        div3.append(img);

        divContainer.append(div1,div2,div3);
        divContainer.addEventListener("click",function(e){
            
           localStorage.setItem("article",JSON.stringify(elem));

           window.location.href="news.html";
        })
        main.append(divContainer)

    })

}

export { apiCall, appendArticles }