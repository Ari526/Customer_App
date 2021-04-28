Rails.application.routes.draw do
  devise_for :users
  resources :customers
  #get 'home/index'
  get 'home/about'
  root 'home#index'
  get 'search',to: "customers#search"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
