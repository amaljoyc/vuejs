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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false; // dummy to show no error
            if (error) {
                reject('Something went wrong');
            } else {
                resolve();
            }
        }, 2000)
    });
}

showPosts();

async function asyncCreatePostAndShow() {
    await createPost({title: 'Title 3', body: 'Body for Title 3'})
    showPosts();
}

asyncCreatePostAndShow();
