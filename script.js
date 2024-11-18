let colorCode = document.getElementById('color-code');
const getColor = () => {
    const randomNumer = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumer.toString(16);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;

}

document.getElementById('btn').addEventListener('click', () =>{
    getColor();
    copyColor();
}
)

const copyColor = () =>{
    let text = colorCode.innerText;
    navigator.clipboard.writeText(text);
}

// setInterval(getColor,500)
getColor();