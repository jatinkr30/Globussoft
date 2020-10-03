function encodeString(str) {
    let encoder = {
        a: 'z',
        b: 'y',
        c: 'x',
        d: 'w',
        e: 'v',
        f: 'u',
        g: 't',
        h: 's',
        i: 'r',
        j: 'q',
        k: 'p',
        l: 'o',
        m: 'n',
        n: 'm',
        o: 'l',
        p: 'k',
        q: 'j',
        r: 'i',
        s: 'h',
        t: 'g',
        u: 'f',
        v: 'e',
        w: 'd',
        x: 'c',
        y: 'b',
        z: 'a',
    }

    for (let i = 0; i < str.length; i++) {
        if (encoder.hasOwnProperty(str.charAt(i).toLowerCase())) {
            let temp = encoder[str.charAt(i).toLowerCase()];
            if (str.charAt(i).toUpperCase() === str.charAt(i)) {
                str = str.substr(0, i) + temp.toUpperCase() + str.substr(i + 1);
            } else {
                str = str.substr(0, i) + temp + str.substr(i + 1);
            }
        }
    }

    return str;
}