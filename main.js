const tweeter = Tweeter()
const renderer = Renderer()

$("#post").on("click",function(){
    tweet=$("#input").val()
    tweeter.newPost(tweet)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click",".delete",function(){
    remove = $(this).parent("div").data().id
    tweeter.removePost(remove)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click",".add-comment",function(){
    pId = $(this).closest(".post").data().id
    nComment=$(this).siblings(".input1").val()
    tweeter.addComment(pId,nComment)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click",".delete-comment",function(){
    pId = $(this).closest(".post").data().id
    cId=$(this).prev(".cc").data().id
    tweeter.removeComment(pId,cId)
    renderer.renderPosts(tweeter.getPosts())
})

renderer.renderPosts(tweeter.getPosts())

