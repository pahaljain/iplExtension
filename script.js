async function getIplData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9eb47939-4cec-4419-bae7-9c8bf539c2f3&offset=0")
        .then((d) => d.json())
        .then((data) => {
            if(data.status != "success") {return;}
            
            const matchesList = data.data;

            if(!matchesList) return [];

            const finalData = matchesList.filter(match => match.series_id === "9a2f9196-a26c-40c3-b9f6-663babd0c8a2").map(match => ` ${match.name} , ${match.status}`);

            document.getElementById("matches").innerHTML = finalData.map(match => `<li> ${match} </li>`).join('');


            return finalData;
        })

        .catch(e => console.log(e));

}

getIplData();