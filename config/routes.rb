Rails.application.routes.draw do
  resource :prospects, only: [:new, :create]

  root 'prospects#new'
end
