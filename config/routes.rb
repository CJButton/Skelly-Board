




Rails.application.routes.draw do

  devise_for :users
  root to: 'static_pages#root'

  # namespace :api, defaults: {format: :json} do
  #   resource :user, only: [:create]
  #   resource :session, only: [:create, :destroy, :show]
  #   resources :reviews, only: [:index, :create, :destroy, :update, :show]
  # end

end
