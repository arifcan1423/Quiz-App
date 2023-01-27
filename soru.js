function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni ;
    this.cevapSecenekleri = cevapSecenekleri ;
    this.dogruCevap = dogruCevap ; 
}

Soru.prototype.cevabıKontrolEt = function(cevap){
    return cevap ===  this.dogruCevap ;
}

let sorular = [
    new Soru("1-Hangisi js paket kontol uygulamasıdır?",{a:"Node.js",b:"typecript",c:"Npm"},"c"),
    new Soru("2-Hangisi js paket kontol uygulamasıdır?",{a:"Node.js",b:"typecript",c:"Npm"},"c"),
    new Soru("3-Hangisi js paket kontol uygulamasıdır?",{a:"Node.js",b:"typecript",c:"Npm"},"c")
]