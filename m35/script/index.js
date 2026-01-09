function removeActiveClass(){
    const activeButtons = document.getElementsByClassName("active");
    console.log(activeButtons);

    for (let btn of activeButtons){
        btn.classList.remove("active");
    }
}

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
    .then((data) => {
        removeActiveClass();
        document.getElementById("btn-all").classList.add("active")
        displayVideos(data.videos)

    })
}

// use for show details btn
const loadVideoDetails = (videoId)=>{
    console.log(videoId)
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayVideoDetails(data.video))
}

/*
{category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', authors: Array(1), …}
*/
const displayVideoDetails = (video) => {
console.log(video);
document.getElementById("video_details").showModal();
const detailsContainer = document.getElementById("details-container");

detailsContainer.innerHTML = `
<div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
   
  </div>
</div>
`;

}

const loadCategoryVideos = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url)

    fetch(url)
    .then((res)=>res.json())
    .then((data)=> {
        removeActiveClass();
        const clickButton = document.getElementById(`btn-${id}`)
        // console.log('click btn')
        clickButton.classList.add("active")
        displayVideos(data.category)
    });
};




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
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
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

    // akta btn a duibar click korle ager data theke jasche ager data soranor jonno
    videoContainer.innerHTML = "";

    if(videos.length === 0){
        videoContainer.innerHTML=`
        <div class="col-span-full flex flex-col justify-center items-center py-20 text-center">
            <img class="w-[120px]" src="./assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `;
        return;
    }

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
               <div class="card bg-base-100">
  <figure class="relative">
    <img class="w-full h-[150px] object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <span class="absolute bottom-[7rem] right-2 text-white bg-black px-2 rounded text-sm">3hrs 33min ago</span>
  <div class=" flex gap-3 px-0 py-5">
   <div class="profile">
    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img src=${video.authors[0].profile_picture} />
  </div>
</div>
   </div>
   <div class="intro">
    <h2 class="text-sm ">Shape of You</h2>
    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="assets/verify.png" alt=""> </p>
   <p class="text-sm text-gray-400">${video.others.views}</p>
   </div>
  </div>
  
  <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
</div>
        `;
        // // ai id ta string tai quatation ('') er modhe likhbo 
        // append
        videoContainer.append(videoCard)

    });



}

loadCategories()
