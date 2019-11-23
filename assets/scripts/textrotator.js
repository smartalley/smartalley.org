const start = "We build "	
let initialized = false	

const endings = [	
    "communities.",	
    "alleys.",	
    "amazing spaces.",	
    "ADUs.",
    "community centers.",
    "safe environments.",
    "beautiful art.",
]	
let endingIndex = 0	

let forwards = true	
let charIndex = 0	
let wait = 0	

document.addEventListener("DOMContentLoaded", () => {	
    const element = document.getElementById("writing")	
    setInterval(() => {	
        if (initialized) {	
            const ending = endings[endingIndex]	
            if (forwards) {	
                element.innerHTML += ending.charAt(charIndex++)	
                if (charIndex == ending.length) {	
                    wait++	
                    forwards = false	
                }	
            } else if (wait != 0) {	
                if (++wait == 30) {	
                    wait = 0	
                }	
            } else {	
                element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1)	
                if (--charIndex == 0) {	
                    forwards = true	
                    if (++endingIndex == endings.length) {	
                        endingIndex = 0	
                    }	
                }	
            }	
        } else {	
            element.innerHTML += start.charAt(charIndex++)	
            if (charIndex == start.length) {	
                initialized = true	
                charIndex = 0	
            }	
        }	
    }, 50)	
}) 