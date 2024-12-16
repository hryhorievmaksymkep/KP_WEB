const unliked = Array.from(document.getElementsByClassName('unliked'));
const liked = Array.from(document.getElementsByClassName('liked'));

for (let i = 0; i < unliked.length; i++) {
    unliked[i].addEventListener("click", () => {
        liked[i].classList.remove("hide");
        unliked[i].classList.add("hide");
    });

    liked[i].addEventListener("click", () => {
        unliked[i].classList.remove("hide");
        liked[i].classList.add("hide");
    });
}
