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

const mainContainer = document.querySelector("#main-container")

for (let i = 0; i < posts.length; i++) {
    mainContainer.innerHTML += `
        <section class="post">
            <div class="profile">
                <img src="/${posts[i].avatar}" alt="profile picture" class="profile-icon">
                <div class="name">
                    <h1>${posts[i].name}</h1>
                    <p>${posts[i].location}</p>
                </div>
            </div>
            <img src="/${posts[i].post}" alt="" class="post-img">
            <div class="post-detail">
                <div class="post-interaction">
                    <img src="/images/icon-heart.png" alt="heart" class="interact heart-icon">
                    <img src="/images/icon-comment.png" alt="comment" class="interact comment-icon">
                    <img src="/images/icon-dm.png" alt="message" class="interact dm-icon">
                </div>
                <div class="post-int-second">
                    <p><span class="bold">${posts[i].likes} likes</span></p>
                    <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>
        </section>
    `
}