



class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.find_comments(params[:post_id])
  end

  def show
  end

  def create
    @comment = Comment.new(comments_params)
    if @comment.save
      @comments = Comment.find_comments(comments_params[:post_id])
      render "api/comments/index"
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = Comment.where(params[:id])
    @comment.destroy
    render json: @review
  end

  def update
    @review = Review.update(params[:id].to_i, :rating => params[:rating],
    :title => params[:title], :description => params[:text])

    render json: @review
  end

  private
  def comments_params
    params.require(:comment).permit(:post_id, :user_id, :body, :username)
  end

end
