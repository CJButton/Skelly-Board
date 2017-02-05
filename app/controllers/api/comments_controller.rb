



class Api::CommentsController < ApplicationController
  def index
    # @reviews = Review.filter(params[:manga])
  end

  def show
    # @review = Review.find_by(manga_id: params[:id].to_i,
    # user_id: current_user.id)
    # if @review.blank?
    #   return nil
    # else
    #   @review
    # end
  end

  def create
    @comment = Comment.new(post_params)
    if @comment.save
      render "api/comments/index"
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find(params[:id].to_i)
    @review.destroy
    render json: @review
  end

  def update
    @review = Review.update(params[:id].to_i, :rating => params[:rating],
    :title => params[:title], :description => params[:text])

    render json: @review
  end

  private
  def comments_params
    params.require(:comment).permit(:user_id, :title, :body, :username)
  end

end
