const input = document.querySelector(".comment")
const tasks = document.querySelector("#lists")
tasks.style.display = "none"

document.querySelector('.add').onclick = function () {
    if (document.querySelector('.input').value.length == 0) {
        alert("Please enter task")
    }

    else {
        tasks.style.display = "block"
        document.querySelector('#lists').innerHTML += `
            <div class="list">
                <span>
                    ${document.querySelector('.input').value}
                </span>
                <button class="delete">X</button>
            </div>
        `;

        document.querySelector('.input').value = ""
        let deletee = document.querySelectorAll(".delete");
        for (let i = 0; i < deletee.length; i++) {
            deletee[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

let delett = document.querySelector(".delet")
delett.addEventListener("click", () => {
    input.classList.add("pluss")
})

let plusss = document.querySelector(".plus")
plusss.addEventListener("click", () => {
    if (input.classList.contains("pluss")) {
        input.classList.remove("pluss")
    }
})

function color(event) {
    event.target.style.textDecoration = 'underline';
}
let elements = document.querySelectorAll('#lists');
elements.forEach((element) => {
    element.addEventListener('click', color);
});



let image1 = document.querySelector(".imagebut")
image1.addEventListener('click', () => {
    let task = document.querySelectorAll('.list')
    let x = [];
    task.forEach(ele => {
        x.push(ele.firstElementChild.innerText)
    })
    tasks.innerHTML = ""
    x.sort()
    x.forEach(item => {
        tasks.innerHTML += `<div class="list">
    <span id="listname">
        ${item}
    </span>
    <button class="delete">X</button>
</div>`
        document.querySelector('.input').value = ""
        let deletee = document.querySelectorAll(".delete");
        for (let i = 0; i < deletee.length; i++) {
            deletee[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    })
});
let image2 = document.querySelector(".imagebut2")
image2.addEventListener('click', () => {
    let task = document.querySelectorAll('.list')
    let y = [];
    task.forEach(ele => {
        y.push(ele.firstElementChild.innerText)
    })
    tasks.innerHTML = ""
    y.reverse()
    y.forEach(item => {
        tasks.innerHTML += `<div class="list">
        <span id="listname">
            ${item}
        </span>
        <button class="delete">X</button>
    </div>`
        document.querySelector('.input').value = ""
        let deletee = document.querySelectorAll(".delete");
        for (let i = 0; i < deletee.length; i++) {
            deletee[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    })
});

image2.style.display = "none"
image1.addEventListener("click", () => {
    image1.style.display = "none";
    image2.style.display = "block";
}),

    image2.addEventListener("click", () => {
        image1.style.display = "block";
        image2.style.display = "none";
    })