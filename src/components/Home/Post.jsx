import React from 'react'

 const Post = () => {
  return (
    <div className='postContainer'>
        <div className='post'>
        <div class="postImage">
            <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
        </div>
            <div className='statusBox'>
            <p className="loginInfo bold">Nnaji Nnaemeka(DevMekus) <span className="redIcon"><i class="fa fa-clock" aria-hidden="true"></i> 30min. ago</span></p>                                          
                <p> What does the Bible say about helping? Hebrews 13:16: “And do not forget to do good and to share with others, for with such sacrifices God is pleased.” Luke 6:30: “Give to everyone who begs fro</p>
                <div className='postAttachment'>
                    <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
                </div>
                <div className='reactions'>
                    <div className='reactionbtn'>
                        <div className='reaction'><p><i class="fa fa-heart" aria-hidden="true"></i> Like</p> </div>
                        <div className='reaction'><p><i class="fa fa-comment" aria-hidden="true"></i> Comment</p> </div>
                        <div className='reaction'><p><i class="fa fa-bookmark" aria-hidden="true"></i> Bookmark</p> </div>  
                    </div>   
                    <div className='counts'>
                        <p>30 Comments</p>
                        <p>8 Bookmarks</p>
                    </div>              
                </div>
            </div>
        </div>
        <div class="loadMoreBtn"><button class="btn btn-light btn-sm">Load More</button></div>
    </div>
  )
}

export default Post
