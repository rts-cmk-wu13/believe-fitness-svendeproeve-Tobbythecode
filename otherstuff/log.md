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

# Dag 2

Morgen - (14:16)  

## tirsdag - splashScreen og homepage

brugte noget af min tid til at få splashscreen til at virke ordenligt og optimiserede/stylede på home pagen så billeder og text vises frem.
``` javascript


return(


    <>
    <section>

        <h1 className="text-[rgb(241,196,14)] text-7xl font-bold pb-4" >News</h1>
        {news.map(news =>(


<NewsCard news={news} key={news.id} />
        ))}
    </section>
    
    </>
)
}


```


problemet med splashscreen var at jeg ikke lod den blive på selve splashscreen, og fordi den ikke havde sin egen page

```javascript
const handleStartClick = () => {
    if (typeof onStart === "function") {
      onStart();
      return;
    }

    window.sessionStorage.setItem("hasStartedTraining", "true");
    router.push("/");
  }

```

``` javascript
export default function ClientLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasStarted = window.sessionStorage.getItem("hasStartedTraining") === "true";
    if (hasStarted) {
      setShowSplash(false);
    }
  }, []);

  const handleStart = () => {
    window.sessionStorage.setItem("hasStartedTraining", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onStart={handleStart} />;
  }
```

som gjorde at det endelig virkede jeg ville nu prøve at få 

1. få classes til at virke
     * Via fetch

2. få id til classes til at virke via params





Eftermiddag - (15:27)


## tirsdag - Login og Profile ( og lidt med classes)

ved brug af landrup har det været ret nemt at arbjede med login og profile da de er næsten ens. så stylingen var nok underligt nok det sværeste der var

Eksempel:


landrup:
```javascript

  <div className="bg-white w-full flex flex-col items-center py-6 shadow">
                <Image src="/user.svg" alt="User profile" width={80} height={80} priority />
               <h2 className="mt-2 text-xl font-bold text-[#003645]">
                     {user.firstname} {user.lastname}
                 </h2>

<p className="text-[#003645] text-sm">{user.role === "instructor" ? "Instruktør" : "Medlem"}</p>
<InstructorActivities userId={user.id} />
        </div>
        <div>
          {user.activities.map(activity => ( 
            <article key={activity.id}> 
              <div className="bg-[#cfd8dc] rounded-xl p-6 w-[75%] align-center shadow-md border-4 border-[#003645]">
                <div className="mb-4">
                  <h3>{activity.name}</h3>
                  <div className="text-[#003645] text-lg mt-2">
                    {activity.weekday} kl. {activity.time}
                  </div>
                </div>
                <Link href={`/activities/${activity.id}`}
                  className="bg-[#003645] text-white rounded-lg px-8 py-2 shadow-md font-medium text-lg transition "
                >
                  Vis hold
                </Link>
              </div>
            </article>
          ))}
        </div>
      </>
    )
}


```
Believe fitness:
```javascript
   <div className="bg-white w-full flex flex-col items-center py-6 shadow">
         
               <h2 className="mt-2 text-xl font-bold text-[#003645]">
                     {user.userFirstName} {user.userLastName}
                 </h2>



        </div>

```
har fjernet ret meget da instruktør er noget jeg ville aberjde på måske imorgen?

når, men classes var overreskende nok svært, da javascript ikke tillader at bruge "class" var jeg nød til at bruge class: classData  fordi react allerede bruger class som en prop så jeg renamede den via "Destructuring" 

selve (id) på classes var nemme da de brugte det samme kode fra landrup.



# Dag 3

Morgen - (15:01)  


## onsdag - Logout og dialouge


wow. det her et skrevet sent men jeg synes jeg har fået ret meget lavede, det kunne tilfældigt også være fordi det er ting vi har arbjedet med før.


med Logout har det været ret nemt da vi skal bare bruge det samme kode fra landrup, 

```javascript

     {

isUserLoggedIn
? <button type="submit"> logud</button>
: <Link href="/login"> login</Link>



        }

```

jeg spørger den bare om hvis jeg er logget ind skal den sige jeg er og hvis ikke skal jeg logge ind (mere fra action.js)



det sværeste var nok dialouge, da det er ret nyt for mig, men efter at se en video fik jeg okay forståelse af det





Eftermiddag - (15:45)

## onsdag - Jeg tror er tæt på profil 


skriver dette ret hurtig men jeg er tæt på at få profil tilmelding til at fungere, virke ikke lige nu men gad godt lige at vise det her

```javascript

export default async function Profilepage() {
    const cookieStore = await cookies()
const userId = cookieStore.get("userId")?.value
const token = cookieStore.get("authToken")?.value

const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
     cache: "no-store"
  })
  const user = await res.json()
 



    return (


      <>
      <div className="bg-white w-full flex flex-col items-center py-6 shadow">
         
               <h2 className="mt-2 text-xl font-bold text-[#003645]">
                     {user.userFirstName} {user.userLastName}
                 </h2>
                 <p className="mt-1 text-sm text-[#003645]">Mine hold</p>
        </div>

        <section className="px-4 py-6">
    
     
        </section>
  
      </>
    )
}


```


som du kan se mangler den ret meget men skal nok gøre færdig i morgen !

1. skal arbjede på instructor og rating
     * skal nok se videon igen

2. få profil tilmelding og forlad til at virke

3. style på det hele lidt mere

4. lave footer


## Dag 4

Morgen - (15:41)  


bliver nød til at mikse både morgen og eftermiddag da jeg ikke har haft tid til at logge i dag

når!

jeg fik endelig min profil til at kunne tilmelde til forskellige classer som medlemmer... men... jeg har arbejdet med at få oprettelse af classer til at virke hele dagen nu, som stadig ikke virker.

men! jeg ved jeg er tæt på det, føles som om det er bare en linje væk før det virker,


i morgen er den sidste dag hvor jeg skal

1. få class oprettelse til at virke

2. få oprettet rating


OPDATERING - jeg fik classoprettelse lige til at virke!


Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
