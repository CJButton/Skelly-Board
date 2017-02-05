
require 'byebug'

class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id].to_i)
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

  def destroy
    @post = Post.find(params[:id].to_i)
    @comments = Comment.where(post_id: params[:id]).delete_all
    @post.destroy
    render json: @post
  end

  def update
    @post = Post.update(params[:id].to_i, posts_params)
    render "api/posts/show"

    # 
    # params[:id].to_i, :rating => params[:rating],
    #         :title => params[:title], :description => params[:text]

end

  private

  def posts_params
    params.require(:post).permit(:id, :user_id, :title, :body, :username)
  end

end
