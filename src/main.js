document.getElementById('compareButton').addEventListener('click', () => {
    const hexdump1 = document.getElementById('hexdump1').value;
    const hexdump2 = document.getElementById('hexdump2').value;

    let parsed1 = parseHexdump(hexdump1);
    let parsed2 = parseHexdump(hexdump2);

    const differences = compareHexdumps(parsed1, parsed2);

    for (let i = 0; i < differences.length; i++) {
        const lineDiff = differences[i];

        for (let j = 0; j < 16; j++) {
            if (lineDiff.includes(j)) {
                if (i < parsed1.length && j < parsed1[i].hexBytes.length) {
                    parsed1[i].hexBytes[j] = `<span class="diff">${parsed1[i].hexBytes[j]}</span>`;
                    parsed1[i].ascii[j] = `<span class="diff">${parsed1[i].ascii[j]}</span>`;
                }
                if (i < parsed2.length && j < parsed2[i].hexBytes.length) {
                    parsed2[i].hexBytes[j] = `<span class="diff">${parsed2[i].hexBytes[j]}</span>`;
                    parsed2[i].ascii[j] = `<span class="diff">${parsed2[i].ascii[j]}</span>`;
                }
            }
        }
    }

    document.querySelector('#hexdump1ResultIndex').innerHTML = parsed1.map(el => el.byteIndex + '<br>').join('');
    document.querySelector('#hexdump1ResultBytes').innerHTML = parsed1.map(el => el.hexBytes.map(byte => byte + " ").join("") + '<br>').join('');
    document.querySelector('#hexdump1ResultAscii').innerHTML = parsed1.map(el => el.ascii.join("") + '<br>').join('');
    document.querySelector('#hexdump2ResultIndex').innerHTML = parsed2.map(el => el.byteIndex + '<br>').join('');
    document.querySelector('#hexdump2ResultBytes').innerHTML = parsed2.map(el => el.hexBytes.map(byte => byte + " ").join("") + '<br>').join('');
    document.querySelector('#hexdump2ResultAscii').innerHTML = parsed2.map(el => el.ascii.join("") + '<br>').join('');
});