async function fetchData() {

    document.getElementById("sisältö").innerHTML
    var x = `<table><thead><th>Nimi</th><th>Puhelin</th><th>Sähköposti</th></thead><tbody>`

    try {
        const response = await fetch("http://localhost:3000/api/henkilot") // haetaan dataa

        const henkilodata = await response.json() // muutetaan json => javascript muotoon

        await henkilodata.map(h => { // loopataan läpi oliot map funktiolla, h on 1 herkkuolio
        x += `<tr><td>${h.name}</td><td>${h.puh}</td><td>${h.email}</td></tr>`
        })

        // taulukko päätetään ja renderöidään html elementtin
        x += `</tbody></table>`
        document.getElementById("sisältö").innerHTML = x

        var x = document.getElementById("sisältö");
        x.style.display = x.style.display ===  "block" ? "none" : "block";
        
        
        
    // Virhetilanteen hallinta
    } 
    catch (error) {
        console.error("Error fetching data:", error)
    }

    }

    fetchData()