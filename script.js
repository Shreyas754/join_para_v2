
 var inputs = [];
 function getPara1() {
    for(var i = 1 ; i <=4 ; i++)
    {
        inputs.push(document.getElementById("input_box_" + i).value);
    

    }

    document.getElementById("showPara1").innerHTML = inputs.join(". ");
}
