


fluid();


function fluid(){
textarea = document.querySelector(".intputStyle");
textarea.addEventListener('input', autoResize, false);
}

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function obtainText(){
    var txt = document.getElementById("intput").value;
    console.log(txt);
    var repIn = document.getElementById("replaceIn").value;
    var repOut = document.getElementById("replaceOut").value;
    if(repIn.length>1){
        var rep = txt.replace(repIn, repOut);
    }
    else{
    var rep = txt.replace(/\s${repIn}\s/gi,repOut);
    }
    console.log(rep)
    answer(rep);
}

function answer(rep){
    var disp = document.getElementById("output")
    disp.setAttribute("style", "visibility:visible; box-shadow: 0px 0px 10px #fff;");
    var ans = document.getElementById("outputText")
    ans.value = rep;
    return ans
}

function copy(){
    var ans = document.getElementById("outputText")
    ans.select();
    ans.setSelectionRange(0, 99999);
    document.execCommand('copy');
}