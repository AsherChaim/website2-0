const h1 = document.getElementById('text')

const styleMe = l => '<span class="styled">' + l + '</span>'

const newS = h1.innerText.split(' ').map(w => w.split('').map((l,i) => (i === 0) ? styleMe(l) : l).join('')).join(' ')

h1.innerHTML = newS