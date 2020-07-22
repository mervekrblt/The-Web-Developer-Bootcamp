const films = [
    {
        title : "Amelie",
        rating : 10,
        hasWatched: true
    },

    {
        title: "Howl's Moving Castle ",
        rating : 10,
        hasWatched: true
    },

    {
        title : "Das Experiment",
        rating : 10,
        hasWatched: true
    },

    {
        title : "12 Angry Man",
        rating : 10,
        hasWatched: false
    }


]

for (let i=0; i<films.length; i++){

    
    if(films.hasWatched === true){
        console.log(`You have watched ${films[i].title}- ${films[i].rating} stars`)
    }else{
        console.log(`You havent watched yet ${films[i].title}`)
    }



}