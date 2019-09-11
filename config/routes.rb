Rails.application.routes.draw do
    get "/", to: "pages#home", as: "root"
    get "/:id", to: "pages#show", as: "film"
end