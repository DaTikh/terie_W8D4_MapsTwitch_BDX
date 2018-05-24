Rails.application.routes.draw do
  root "pages#index"
  get :maps, to: "pages#maps", as: :maps
  get :twitch, to: "pages#twitch", as: :twitch
end
