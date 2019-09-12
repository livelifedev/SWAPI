class PagesController < ApplicationController
    def home
        response = HTTParty.get('https://swapi.co/api/films/')
        json = JSON.parse(response.body)
        @films = json["results"]
        @favs = params["favorites"] ? params["favorites"] : []
        puts @favs
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

    def test
        puts "did run"
        @favs = params["favorites"] ? params["favorites"] : []
        redirect_to root_path
    end
end