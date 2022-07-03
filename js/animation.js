const typing = (text, idElement, timer) => {
    let array = text.split('').reverse();
    let write = setInterval(() => {
        if(!array.length) return clearInterval(write);
        var arrOrder = array.pop();
        document.getElementById(idElement).innerHTML
            += arrOrder;
    }, timer);
}

typing('Hey! Meu nome é Alan.', 'greeting', 90);

setTimeout(() => {
    typing('Sou Application Developer Intern na IBM.', 'work', 30);
}, 1950);