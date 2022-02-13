const boxOutput = document.querySelectorAll(".highlight-code");
boxOutput.forEach(box=>{
    let code = box.innerHTML;
        code = code.replaceAll("<", "&LT");
        box.innerHTML = code;
});