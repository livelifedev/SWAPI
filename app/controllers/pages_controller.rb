class PagesController < ApplicationController
    def home
        response = HTTParty.get('https://swapi.co/api/films/')
        json = JSON.parse(response.body)
        @films = json["results"]
    end

    def show
        id = params["id"]
        response = HTTParty.get("https://swapi.co/api/films/#{id}/")
        json = JSON.parse(response.body)
        @film = json
    end
end