fluid();

function fluid(){
textarea = document.querySelector(".intputStyle");
textarea.addEventListener('input', autoResize, false);
}

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function getText(){
    var repIn = document.getElementById("replaceIn").value;
    repIn = repIn.split(/[ ,]+/);
    var repOut = document.getElementById("replaceOut").value;
    repOut = repOut.split(/[ ,]+/);
    return {repIn, repOut};
}


function replaceText(){
    var get = getText();
    var In = get.repIn;
    var Out = get.repOut;
    
    var rep = document.getElementById("intput").value;
    for(var i=0;i<In.length; i++){
    console.log(In, Out)
    var regex = new RegExp(`\\b${In[i]}\\b|^${In[i]}\\b|\\b${In[i]}$|\\b${In[i]}-`, "gi");
    var rep = rep.replace(regex, Out[i]);
    console.log(rep)
}
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