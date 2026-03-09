# LOGBOG

Brug denne logbog til at holde styr på dine commits.

Udfyld hver dag. Det er vigtigt at du overholder denne logbog - du kan risikere at dumpe, hvis du ikke bruger den.  
Skriv tidspunkt for dit commit ud for hver dag, både morgen og aften.  
Husk, at du ikke må arbejde på din opgave mellem kl. 16:00 og kl. 8:00.

# Dag 1

Morgen - (13:34)  


## Mandag - SplashScreen

jeg var nysgerrig på at lave splashscreen først og wow, det var noget af en opgave for at sige the mildt, jeg har nemlig aldrig arbjedede på dette før så jeg så nogen videor og brugte _animejs_ som er en frame for simpelthen animationer.

```javascript

  animate('#absolutely', {
 scale: 1.25,
 
  ease: spring({
    bounce: 0.4,
    duration: 367
  })
});
```

det tog sin tid, men til sidst fik jeg det op at køre og er stolt af mig selv begrund af det 



Eftermiddag - (13:44)

## Mandag - News og fonts

burde nok havde commitede, eller skrevet derimod i loggen til tidligere men det skal nok gå. efter splashscreen havde jeg lidt tid til at fokusere på det næste som var selvfølgelig news, kiggede lidt på min kode fra termins til dette og ændrede lidt så ~~det burde virke~~ (jeg siger burde fordi jeg har rent faktisk ikke haft chance til at tjekke på det endnu.)

lavede en dal.js til at fetche selve news

``` javascript
export async function getNews(){


    const response = await fetch(`http://localhost:4000/api/v1/news`)
        if (!response.ok) {
throw new Error({ message: "noget gik galt"})
        }
        return await response.json();
    }
```

og til sidst begrund af hjælp fra sidste opgave havde jeg lært at indsætte fonts via tailwind

``` javascript
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
   weight: '500',
});

```


tænkte det ville være en nem ting lige at få gjort inden dagen var over.

## Dag 2

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 3

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 4

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
