Rails.application.routes.draw do
    get "/", to: "pages#home", as: "root"
    get "/film/:id", to: "pages#show", as: "film"
    get "/search", to: "pages#search"
    post "/test", to: "pages#test"
end