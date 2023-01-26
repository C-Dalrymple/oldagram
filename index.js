const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let container = document.getElementById("container")
function renderPage() {
    let html = ""
    for (let i = 0; i < posts.length; i++ ){
        html += `
        <section class="post-container">
        
            <div class="top-section">
                <img class="avatar" src="${posts[i].avatar}" alt="profile picture">
                <div class="top-info">
                    <span class="name info">${posts[i].name}</span>
                    <span class="location info">${posts[i].location}</span>
                </div>
            </div>
            
            <img class="post" src="${posts[i].post}" alt="famous artist">
            
            <div class="interactive-box">
                <img class="icon like-btn" src="images/icon-heart.png")">
                <img class="icon comment-btn" src="images/icon-comment.png">
                <img class="icon dm-btn" src="images/icon-dm.png">
            </div>
            
            <p class="likes">${posts[i].likes} likes</p>
            
            <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
        </section>`
    }
    container.innerHTML += html
    }

renderPage()


