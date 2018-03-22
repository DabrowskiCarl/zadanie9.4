function drawTree(a) {
    for (let i = 0; i < a; i++) {
        let star = '';
        for (let j = 0; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}

drawTree(10)