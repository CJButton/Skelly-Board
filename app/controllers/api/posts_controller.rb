


class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
  @post = Post.new(posts_params)

  if @post.save
    render "api/posts/show"
  else
    render(
      json: ["Title/Text cannot be blank"],
      status: 401
    )
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

  # private
  #
  # def posts_params
  #   params.require(:post).permit(:userId, :title, :body, :username, :id)
  # end

end
