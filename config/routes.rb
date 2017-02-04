




Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:show, :index, :destroy, :update, :create]
    resources :comments, only: [:show, :index, :destroy, :update, :create]
  end

end
