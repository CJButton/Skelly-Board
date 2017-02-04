


class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    
  end

  def show
    @post = Post.where(posts_params.id)
  end

  def create
  name = User.find(posts_params.user_id).username
  @post = Post.new(posts_params)

  if @post.save
    @post
  end

end

  # need to delete all comments associated with this post later
  def destroy
    @post = Post.delete(posts_params.id)
    render json: @post
  end

  def update
  @post = Post.update(posts_paras)
  render json: @post
end

  private

  def posts_params
    params.require(:post).permit(:id, :title, :body, :user_id)
  end

end
