class PagesController < ApplicationController
    def home
        response = HTTParty.get('https://swapi.co/api/films/')
        json = JSON.parse(response.body)
        @films = json["results"]
        puts params["username"]
    end

    def show
        id = params["id"]
        response = HTTParty.get("https://swapi.co/api/films/#{id}/")
        json = JSON.parse(response.body)
        @film = json
    end

    def search
        query = params["q"]
        response = HTTParty.get("https://swapi.co/api/films/?search=#{query}")
        json = JSON.parse(response.body)
        @results = json["results"]
    end
end