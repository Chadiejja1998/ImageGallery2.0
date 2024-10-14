Rails.application.routes.draw do
  root 'pages#home'
  resources :images, only: [:index, :new, :create]
end
