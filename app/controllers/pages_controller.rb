class PagesController < ApplicationController
    def home
        response = HTTParty.get('https://swapi.co/api/films/')
        json = JSON.parse(response.body)
        @films = json["results"]
    end
end