function keyChange() {
    let x = document.getElementById("encode").checked
    console.log(x)
    if (document.getElementById("encode").checked) {
        enCode()
    } else {
        deCode()
    }
}