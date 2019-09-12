class PagesController < ApplicationController
    def home
        response = HTTParty.get('https://swapi.co/api/films/')
        json = JSON.parse(response.body)
        @films = json["results"]
    end

    def map_characters(list)
        list.map { |char|
            response = HTTParty.get(char)
            JSON.parse(response.body)
        }
    end

    def show
        id = params["id"]
        response = HTTParty.get("https://swapi.co/api/films/#{id}/")
        json = JSON.parse(response.body)
        @film = json
        @characters = map_characters(json["characters"])
    end

    def search
        query = params["q"]
        response = HTTParty.get("https://swapi.co/api/films/?search=#{query}")
        json = JSON.parse(response.body)
        @results = json["results"]
    end

    

end