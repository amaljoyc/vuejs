const posts = [
    {title: 'Title 1', body: 'Body for Title 1'},
    {title: 'Title 2', body: 'Body for Title 2'},
]

function showPosts(timeout) {
    setTimeout(() => {
        let page = ``
        posts.forEach(post => {
            page += `<li>${post.title} -> ${post.body}</li>`;
        })
        document.body.innerHTML = page;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

showPosts();
createPost({title: 'Title 3', body: 'Body for Title 3'}, showPosts);
