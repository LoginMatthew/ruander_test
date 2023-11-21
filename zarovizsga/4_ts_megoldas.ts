
//1-es feladat
function osszesOszto(szam:number):number[]{
    var osztok : number[] = [];

    osztok.push(szam);
    for(var i = 0; i <szam; i++)
    {
        if(szam % i ==0)
        {
            osztok.push(i);
        }
    }

    
    return osztok.sort((n1,n2) => n1 - n2);
}

//2-es feladat
function parosDarab(szamok:number[]): number
{
    var darabParosSzam : number = 0;

    for(var i = 0; i<szamok.length; i++)
    {
        if(szamok[i]%2 ==0)
        {
            darabParosSzam++;
        }
    }
    
    return darabParosSzam;
}


//3-as feladat
function fuggvenyhivasPalindrom(asd: Function):boolean
{
    var bemenetiFunctionString = (asd() as string).toLocaleLowerCase();
    var palindromE : boolean = true;

    for (var i = 0, j = bemenetiFunctionString.length - 1; i < j; ++i, --j)
    {
        if (bemenetiFunctionString[i] !== bemenetiFunctionString[j]) {
            return false;
        }
    }

    return palindromE;
}
