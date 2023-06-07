





let maindog
async function fetchdogs1() {
    try {
        const responseAll = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        const responseAll2 = await responseAll.json()
        let allDogs = await responseAll2.data.players
        maindog = await allDogs[0]
        let list = document.createElement('ul');
        list.onclick = function () { updatemaindog() };
        for (let i = 0; i < allDogs.length; i++) {
            let item = document.createElement('li');
            item.innerHTML = (await allDogs[i].name)
            item.onclick = function () { maindog = allDogs[i] };

            list.appendChild(item);
        }
        document.getElementById('allpuppylist').appendChild(list);



    } catch (error) {
        console.error(error);
    }
}
fetchdogs1()


function updatemaindog() {

    let killthese = document.getElementsByClassName('deleteme');
    for (let w = 0; w < killthese.length;) {
        killthese[w].remove()
    }


    let dogtraits = Object.entries(maindog)
    for (let a = 0; a < dogtraits.length; a++) {
        let item = document.createElement('li');
        item.className = 'deleteme'
        item.innerHTML = (dogtraits[a])
        document.getElementById('newpuppylist').appendChild(item);
    }
}

