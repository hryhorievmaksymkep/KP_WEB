const blogElement = document.getElementsByClassName("blog-element");
const blogElementImg = document.getElementsByClassName("blog-element-img");
const blogElementTitle = document.getElementsByClassName("blog-element-title");
const blogElementPublishDate = document.getElementsByClassName("blog-element-publish-date");

fetch("https://hryhorievmaksymkep.github.io/KP_Json_API/blogs.json")
    .then(response => response.json())
    .then(response => {
        let data = response;
        console.log(data);
        for(let i=0; i<blogElement.length; i++){
            blogElementImg[i].src = data[i].img;
            blogElementTitle[i].textContent = data[i].title;
            blogElementPublishDate[i].textContent = data[i].date;
        }
    }
);

