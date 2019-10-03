const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p0",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p1",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = (posts.length-1) 
    let commentIdCounter = 0
    for (let i of posts) {
        let z = i.comments.length
        commentIdCounter += z
    }
    const newPost = function (text) {
        let postText = text
        const post = {}
        if (postText != null) {
            post.text = postText
            post.comments = []
            postIdCounter++
            post.id = "p" + postIdCounter
            posts.push(post)
        }
    }
    const removePost = function (postId) {
        for (n in posts) {
            if (posts[n].id === postId) {
                posts.splice(n, 1)
            }
        }
    }
    const addComment = function (postId, text) {
        const comment = {}
        commentIdCounter++
        comment.id = "c" + commentIdCounter
        comment.text = text
        for (n in posts) {
            if (posts[n].id === postId) {
                posts[n].comments.push(comment)
            }
        }
    }
    const removeComment = function (postId, commentId) {
        for (n in posts) {
            for (z in posts[n].comments) {
                if (posts[n].id === postId && posts[n].comments[z].id === commentId) {
                    posts[n].comments.splice(z, 1)
                }
            }
        }
    }

    const getPosts = () => posts

    return {
        getPosts: getPosts,
        removeComment: removeComment,
        addComment: addComment,
        removePost: removePost,
        newPost: newPost
    }
}

