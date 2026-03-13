# Believe-fitness-svendeproeve
Tobias Kleberg Nielsen, Wu13

## tech stacks

- **nextJs**  er et javascript framework, hvor den bruger routes baseret på ens filer og folder, det var det framework some jeg valgte fordi jeg følte at  det var det framework jeg har haft mest oplevelse med, og bedst at bruge her.



- **AnimeJs** er et javascript animations biblotek som arbjeder med kun et API, som indholder hurtige animationer, dette virker med ting some css, svg'er og dom attritubes, og hvor man kan være kreativ i ens animationer selv på deres egen hjemmeside. jeg valgte dette biblotek fordi jeg tænkte at det ville være nyt, men også facinerede i hvordan jeg kunne bruge dette til min splashScreen
- API
- TypeScript
- Tailwind



## kode eksempel

```javascript
export async function createClass(prevState, formData) {
    const cookieStore = await cookies()
    const authToken = cookieStore.get("authToken").value

    console.log(Object.fromEntries(formData));


    const assetResponse = await fetch(`http://localhost:4000/api/v1/assets`, {
        method: "POST",
        headers: { 
            Authorization: `Bearer ${authToken}`
        },
        body: formData
    })

    const assetData = await assetResponse.json()


    formData.append("assetId", assetData.id)
  

    
    const response = await fetch(`http://localhost:4000/api/v1/classes`, {
        method: "POST",
        headers: { 
            Authorization: `Bearer ${authToken}`
        },
        body: formData
    })
  
redirect("/profile")


}



```

Dette er en asynkron function soms mål er at fetche både assets og classes på samme export, dens formål er at hive data fra Api'et og uploade filer og classes, hvor den henter det fra authToken i cookien 

```javascript

    formData.append("assetId", assetData.id)
```

Denne her appender en ny data som kan ses her:

```console foo@bar:~$    id: 2,
      trainerName: 'Sara Connor',
      createdAt: '2020-03-08T19:03:08.438Z',
      updatedAt: '2020-03-08T19:03:08.438Z',
      assetId: 6
```




Det her var hårdt, og svært, jeg havde fornemmelsen af at det ville være nemmere, som det var på nogle punkter  men andre punkter var det et mareridt, 