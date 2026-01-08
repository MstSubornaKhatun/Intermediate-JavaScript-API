

function loadCategories(){
    // console.log("hi")

    // 1. fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2. convert promise to json
    .then(res => res.json())
    // 3. send data to display
    .then((data) =>displayCategories(data.categories))
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response => response.json())
    .then((data) => displayVideos(data.videos))
}




function displayCategories(categories){
    // console.log(categories)

    // get the container
    const categoryContainer = document.getElementById("category-container")
    // loop operation on Array of object
    for (let cat of categories){
        // console.log(cat)

        //create element 
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `

        // append element
        categoryContainer.appendChild(categoryDiv)
    }
    
}




/*
{
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}
*/
// abar arrow function likhbo
const displayVideos=(videos)=>{ // videos => array of object
   // 
    //console.log(videos)
    // get the container
    const videoContainer = document.getElementById("video-container");

    // // loop operation array of object
    // for (let video of videos){
    //     // console.log(video)

    //     // create element
    //     const videoDiv = document.createElement("div");
    //     videoDiv.innerHTML = `
    
    //     `
    //     // append element
    //     videoContainer.appendChild(videoDiv)
    // }
    // abar for of loop use korbo na, forEachuse korbo


    videos.forEach(video=>{
        console.log(video)

        // element create
        const videoCard = document.createElement("div")
        videoCard.innerHTML=`
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `;
        // append
        videoContainer.append(videoCard)

    });



}

loadCategories()
loadVideos()