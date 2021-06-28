function enCode() {

    let userInput = document.getElementById("userInput").value;
    let k = document.getElementById("userShift").value;
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let lowerInput = userInput.toLowerCase();
    let newArray = [];

    for (i = 0; i < lowerInput.length; i++) {

        if (alphabet.includes(lowerInput.charAt(i)) === false) {
            newArray.push(lowerInput.charAt(i));
        }
        
        for (j = 0; j < alphabet.length; j++) {
            
            if (lowerInput.charAt(i) == alphabet[j]) {
                if (j > (26 - k)) {
                    newArray.push(alphabet[(j+k-26)]);
                } else {
                newArray.push(alphabet[j+k]);
                }
            } 
        }
    }

    let newMessage = newArray.join('');

    for (i = 0; i < userInput.length; i++) {
        if (userInput.charAt(i) === userInput.charAt(i).toUpperCase()) {
            newMessage = newMessage.replace(newMessage.charAt(i), newMessage.charAt(i).toUpperCase());
        }
    }

    console.log(newMessage)
    document.getElementById("newMessage").value = newMessage;

};

