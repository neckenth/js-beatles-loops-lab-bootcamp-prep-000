function theBeatlesPlay(m, i) {
    var a = []
    for (var n = 0; n < m.length; n++) {
        a.push(`${m[n]} plays ${i[n]}`)
    }
    return a
}

function johnLennonFacts(f) {
    var i = 0
    while (f[i]) {
        f[i] = `${f[i]}!!!`
        i++
    }
    return f
}
