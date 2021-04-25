function masa() {
    var V = document.getElementById("wartosc").value;
    V = parseFloat(V);

    var ro = document.getElementById("wartosc2").value;
    ro = parseFloat(ro);
    
    var mnoz = 0;
    mnoz= V * ro;
    
    
   
        if (isNaN(mnoz)) {

            document.getElementById('wynik').innerHTML= '❌ to nie jest liczba';
            document.getElementById('wynik').style.color= 'white';
            document.getElementById('wynik').style.marginTop= '73px';
            document.getElementById('wynik').style.marginLeft= '20px';
            document.getElementById('wynik').style.marginBottom= '20px';
            document.getElementById('wynik').style.height= '30px';
            document.getElementById('wynik').style.width= '150px';
            document.getElementById('wynik').style.fontSize= '30px';
            document.getElementById('wynik').style.fontFamily= 'Averia Sans Libre';
            document.getElementById('wynik').style.textAlign= 'center';
            document.getElementById('wynik').style.animationTimingFunction= 'ease-in-out'; 
            
        }
            else {
                
                document.getElementById('wynik').innerHTML=  mnoz.toFixed(3) + '✔️';
                document.getElementById('wynik').style.color= 'white';
                document.getElementById('wynik').style.marginTop= '73px';
                document.getElementById('wynik').style.marginLeft= '20px';
                document.getElementById('wynik').style.marginBottom= '20px';
                document.getElementById('wynik').style.height= '30px';
                document.getElementById('wynik').style.width= '30px';
                document.getElementById('wynik').style.fontSize= '40px';
                document.getElementById('wynik').style.fontFamily= 'Averia Sans Libre';
                document.getElementById('wynik').style.textAlign= 'center';
                document.getElementById('wynik').style.animationTimingFunction= 'ease-in-out'; 
            }
    }

        
        
    /*  
    function gestosc() {
        var M = document.getElementById("wartosc3").value;
        M = parseFloat(M);
            
        var V = document.getElementById("wartosc4").value;
        V = parseFloat(V);
        
        var dziel = 0;
        dziel = M / V;


        if (isNaN(dziel)) {
            
            document.getElementById('wynik2').innerHTML= '❌ to nie jest liczba';
            document.getElementById('wynik2').style.color= 'white';
            document.getElementById('wynik2').style.marginTop= '73px';
            document.getElementById('wynik2').style.marginLeft= '20px';
            document.getElementById('wynik2').style.marginBottom= '20px';
            document.getElementById('wynik2').style.height= '30px';
            document.getElementById('wynik2').style.width= '150px';
            document.getElementById('wynik2').style.fontSize= '30px';
            document.getElementById('wynik2').style.fontFamily= 'Averia Sans Libre';
            document.getElementById('wynik2').style.textAlign= 'center';
            document.getElementById('wynik2').style.animationTimingFunction= 'ease-in-out'; 
        }
        
        else {
            document.getElementById('wynik2').innerHTML=  dziel.toFixed(3) + '✔️';
            document.getElementById('wynik2').style.color= 'white';
            document.getElementById('wynik2').style.marginTop= '73px';
            document.getElementById('wynik2').style.marginLeft= '20px';
            document.getElementById('wynik2').style.marginBottom= '20px'
            document.getElementById('wynik2').style.height= '30px';
            document.getElementById('wynik2').style.width= '30px';
            document.getElementById('wynik2').style.fontSize= '40px';
            document.getElementById('wynik2').style.fontFamily= 'Averia Sans Libre';
            document.getElementById('wynik2').style.animationTimingFunction= 'ease-in-out'
            document.getElementById('wynik2').style.textAlign= 'center';
        }
    }
        
        function objetosc() {
            var M = document.getElementById("wartosc5").value;
            M = parseFloat(M);
            
            var ro = document.getElementById("wartosc6").value;
            ro = parseFloat(ro);

            var dziel = 0;
            dziel = M / ro;

   
 
        if (isNaN(dziel)) {
            
            document.getElementById('wynik3').innerHTML= '❌ to nie jest liczba';
            document.getElementById('wynik3').style.color= 'white';
            document.getElementById('wynik3').style.marginTop= '73px';
            document.getElementById('wynik3').style.marginLeft= '20px';
            document.getElementById('wynik3').style.marginBottom= '20px';
            document.getElementById('wynik3').style.height= '30px';
            document.getElementById('wynik3').style.width= '150px';
            document.getElementById('wynik3').style.fontSize= '30px';
            document.getElementById('wynik3').style.fontFamily= 'Averia Sans Libre';
            document.getElementById('wynik3').style.textAlign= 'center';
            document.getElementById('wynik3').style.animationTimingFunction= 'ease-in-out'; 
        }
            
        else {
        
            document.getElementById('wynik3').innerHTML=  dziel.toFixed(3) + '✔️';
            document.getElementById('wynik3').style.color= 'white';
            document.getElementById('wynik3').style.marginTop= '73px';
            document.getElementById('wynik3').style.marginLeft= '20px';
            document.getElementById('wynik3').style.marginBottom= '20px'
            document.getElementById('wynik3').style.height= '30px';
            document.getElementById('wynik3').style.width= '30px';
            document.getElementById('wynik3').style.fontSize= '40px';
            document.getElementById('wynik3').style.fontFamily= 'Averia Sans Libre';
            document.getElementById('wynik3').style.animationTimingFunction= 'ease-in-out';
            document.getElementById('wynik3').style.textAlign= 'center';
            }
        }
        
        */

        function sprawdz() {

            //SIŁA GRAWITACJI
            var stalaG = 6.67 * (10 ** -11);
            var M = parseFloat(document.getElementById("wartosc").value) * parseFloat(document.getElementById("wartosc2").value);
            var ro = parseFloat(document.getElementById("wartosc2").value);
            var r = parseFloat(document.getElementById("wartosc7").value);
          
            var wynik1 = parseFloat(1.333 * 3.14 * stalaG * M * ro * r);
            

            //1 PRĘDKOŚĆ KOSMICZNA
            var wynik2 = parseFloat(Math.sqrt((stalaG * M)/r));

            //2 PRĘDKOŚĆ KOSMICZNA
            var wynik3 = parseFloat(Math.sqrt((2 * stalaG * M)/r));

            //NATĘŻENIE POLA GRAWITACYJNEGO
            var wynik4 = parseFloat((stalaG * M)/(r*r));
            
            if((r != isNaN &&  M != isNaN) && (ro != isNaN && wynik != isNaN)) {
            }
                document.getElementById('pocz3').innerHTML= 'Siła grawitacji na powierzchni Ziemi wynosi około:' + " " + wynik1.toFixed(5) + " Niutonów ❗️.";
                document.getElementById('pocz3').style.color= 'white';
                document.getElementById('pocz3').style.marginTop= '73px';
                document.getElementById('pocz3').style.height= '140px';
                document.getElementById('pocz3').style.width= '1100px';
                document.getElementById('pocz3').style.fontSize= '35px';
                document.getElementById('pocz3').style.textShadow= '0px 0px 7px #000000';
                document.getElementById('pocz3').style.fontFamily= 'Averia Sans Libre';
                document.getElementById('pocz3').getElementsByClassName= 'tracking-in-expand';
                document.getElementById('pocz3').style.animationTimingFunction= 'ease-in-out';
                document.getElementById('pocz3').style.textAlign= 'center';
                
                ///////////////////////////////
                
                document.getElementById('v1').innerHTML= 'Piersza prędkość kosmiczna wynosi około:' + " " + wynik2.toFixed(5) + " kilometrów na sekundę ❗️.";
                document.getElementById('v1').style.color= 'white';
                document.getElementById('v1').style.height= '140px';
                document.getElementById('v1').style.width= '1100px';
                document.getElementById('v1').style.fontSize= '35px';
                document.getElementById('v1').style.textShadow= '0px 0px 7px #000000';
                document.getElementById('v1').style.fontFamily= 'Averia Sans Libre';
                document.getElementById('v1').getElementsByClassName= 'tracking-in-expand';
                document.getElementById('v1').style.animationTimingFunction= 'ease-in-out';
                document.getElementById('v1').style.textAlign= 'center';

                ///////////////////////////////
                
                document.getElementById('v2').innerHTML= 'Druga prędkość kosmiczna wynosi około:' + " " + wynik3.toFixed(5) + " kilometrów na sekundę ❗️.";
                document.getElementById('v2').style.color= 'white';
                document.getElementById('v2').style.height= '100px';
                document.getElementById('v2').style.width= '1100px';
                document.getElementById('v2').style.fontSize= '35px';
                document.getElementById('v2').style.textShadow= '0px 0px 7px #000000';
                document.getElementById('v2').style.fontFamily= 'Averia Sans Libre';
                document.getElementById('v2').getElementsByClassName= 'tracking-in-expand';
                document.getElementById('v2').style.animationTimingFunction= 'ease-in-out';
                document.getElementById('v2').style.textAlign= 'center';

                ///////////////////////////////
                
                document.getElementById('v3').innerHTML= 'Natężenie pola grawitacyjnego wynosi około:' + " " + wynik4.toFixed(20) + " metrów na sekundę ❗️.";
                document.getElementById('v3').style.color= 'white';
                document.getElementById('v3').style.height= '100px';
                document.getElementById('v3').style.width= '1100px';
                document.getElementById('v3').style.fontSize= '35px';
                document.getElementById('v3').style.textShadow= '0px 0px 7px #000000';
                document.getElementById('v3').style.fontFamily= 'Averia Sans Libre';
                document.getElementById('v3').getElementsByClassName= 'tracking-in-expand';
                document.getElementById('v3').style.animationTimingFunction= 'ease-in-out';
                document.getElementById('v3').style.textAlign= 'center';
        }
