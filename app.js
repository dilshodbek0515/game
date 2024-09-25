const click1 = document.querySelector(".click1")
const click2 = document.querySelector(".click2")
const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const hero_count1 = document.querySelector(".hero_count1")
const hero_count2 = document.querySelector(".hero_count2")

const tugatish = document.querySelector(".tuxtatish");
const tugatishText = document.querySelector(".tuxtatish_text");

// user1
// user1
click1.addEventListener("click", function () {
    let res = Math.floor(Math.random() * 10);
    hero_count1.textContent = res;
    count1.textContent = +count1.textContent + res;
    click1.disabled = true;
    click2.disabled = false;
    click2.style.backgroundColor = "dodgerblue";
    click1.style.backgroundColor = "red";
    click1.style.color = "white";

    if (parseInt(count1.textContent) >= 50) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 1 g'olib bo'ldi 🥳🤑🥳";
    } else if (parseInt(count2.textContent) >= 50) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 2 g'olib bo'ldi 🥳🤑🥳";
    } else {
        tugatish.style.display = "none";
    }
});

// user2
click2.addEventListener("click", function () {
    let res = Math.floor(Math.random() * 10);
    hero_count2.textContent = res;
    count2.textContent = +count2.textContent + res;
    click2.disabled = true;
    click1.disabled = false;
    click2.style.backgroundColor = "red";
    click2.style.color = "white";
    click1.style.backgroundColor = "dodgerblue";

    if (parseInt(count1.textContent) >= 50) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 1 g'olib bo'ldi 🥳🤑🥳";
    } else if (parseInt(count2.textContent) >= 50) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 2 g'olib bo'ldi 🥳🤑🥳";
    } else {
        tugatish.style.display = "none";
    }
});
