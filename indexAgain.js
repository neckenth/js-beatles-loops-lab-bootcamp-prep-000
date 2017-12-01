function thBeatlesPlay(m, i) {
    var a = []
    for (var n = 0; n < m.length; n++) {
        a.push(`"${m[n]} plays ${i[n]}"`)
    }
    return a
}
