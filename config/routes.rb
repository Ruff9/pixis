Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resource :prospects, only: [:new, :create]

  root 'prospects#new'
end
