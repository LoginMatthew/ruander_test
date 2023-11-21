//1-es feladat
function osszesOszto(szam) {
    var osztok = [];
    osztok.push(szam);
    for (var i = 0; i < szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok.sort(function (n1, n2) { return n1 - n2; });
}
//2-es feladat
function parosDarab(szamok) {
    var darabParosSzam = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            darabParosSzam++;
        }
    }
    return darabParosSzam;
}
//3-as feladat
function fuggvenyhivasPalindrom(asd) {
    var bemenetiFunctionString = asd().toLocaleLowerCase();
    var palindromE = true;
    for (var i = 0, j = bemenetiFunctionString.length - 1; i < j; ++i, --j) {
        if (bemenetiFunctionString[i] !== bemenetiFunctionString[j]) {
            return false;
        }
    }
    return palindromE;
}
