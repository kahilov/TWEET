const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty();
        for (n in posts) {
            elem_post = "<div class=\"post\" id=post" + n + " data-id=p" + n + ">"
            $("#posts").append(elem_post)
            elem_deleteComment = "<div class=\"delete-comment\"> DELETE COMMENT </div>"
            elem_delete="<div class=\"delete\"> DELETE </div>"
            elem_text = "<div class=\"post-text\">" + posts[n].text + "</div>"
            elem_comments = "<div class=\"comments\" id=\"comments" + n + "\"></div>"
            elem_addComment = "<div class=\"add-comment\"> ADD COMMENT </div>"
            elem_inputComment ="<input type=text placeholder=Write class=\"input1\"></input>"
            $("#post" + n).append(elem_text)
            $("#post" + n).append(elem_comments)
            $("#post" + n).append(elem_delete)
            $("#comments" + n).append(elem_addComment)
            $("#comments" + n).append(elem_inputComment)
            for (z of posts[n].comments) {
                elem1 = "<div class = cc data-id=" + z.id + ">" + z.text + "</div>"
                $("#comments" + n).append(elem1)
                $("#comments" + n).append(elem_deleteComment)
            }
        }
    }
    return {
        renderPosts: renderPosts
    }
}