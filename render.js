const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty();
        for (n in posts) {
            elem_post = "<div class=\"post posts\" id=post" + n + ">"
            $("#posts").append(elem_post)

            elem_text = "<div class=\"post-text\">" + posts[n].text + "</div>"
            elem_comments = "<div class=\"comments\" id=\"comments" + n + "\"></div>"
            $("#post" + n).append(elem_text)
            $("#post" + n).append(elem_comments)

            for (z of posts[n].comments) {
                elem1 = "<div>" + z.text + "</div>"
                $("#comments" + n).append(elem1)
            }
        }
    }
    return {
        renderPosts: renderPosts
    }
}