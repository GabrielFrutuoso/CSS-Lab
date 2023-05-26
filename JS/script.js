//////Color Picker/////////
function pegarCor(){
    const pickerBack = document.getElementById('color-picker')
    const cor = document.getElementById('color').value
    const colorResult = document.getElementById('result')
    const textPicker = document.getElementById('text')

    pickerBack.style.backgroundColor = cor
    colorResult.style.color = cor 
    textPicker.style.color = cor
    textPicker.style.filter = 'invert(1)'
    colorResult.innerHTML = `background-color = ${cor}`
}

//////Gradient Tester/////////
function gradient(){
    var primeira = document.getElementById('cor1').value
    var segunda = document.getElementById('cor2').value
    var angulo = document.getElementById('angulo').value
    const backGradient = document.getElementById('gradiente')
    const resultGradient = document.getElementById('resultGradient')
    

    backGradient.style.backgroundImage = `linear-gradient(${angulo}, ${primeira}, ${segunda})`
    resultGradient.innerHTML = `linear-gradient(${angulo}, ${primeira}, ${segunda});`

}

//////box-shadow/////////
function boxShadow(){
    const internalBox = document.getElementById('internal-box')
    const sombraX = document.getElementById('sombraX').value
    const sombraY = document.getElementById('sombraY').value
    const sombraRadius = document.getElementById('sombraRadius').value
    const sombraSpread = document.getElementById('sombraSpread').value
    const resultShadow = document.getElementById('resultShadow')

    internalBox.style.boxShadow = `${sombraX}px ${sombraY}px ${sombraRadius}px ${sombraSpread}px #000000`
    resultShadow.innerHTML = `box-shadow: ${sombraX}px ${sombraY}px ${sombraRadius}px ${sombraSpread}px #000000`
}

//////border-radius/////////
function borderRadius(){
    const radiusBox = document.getElementById('radius-box')
    const borda1 = document.getElementById('borda1').value
    const borda2 = document.getElementById('borda2').value
    const borda3 = document.getElementById('borda3').value
    const borda4 = document.getElementById('borda4').value
    let resultRadius = document.getElementById('resultRadius')

    radiusBox.style.borderRadius = `${borda1}% ${borda2}% ${borda3}% ${borda4}%` 
    resultRadius.innerHTML = `border-radius: ${borda1}% ${borda2}% ${borda3}% ${borda4}%;`     
}


