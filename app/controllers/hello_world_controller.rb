class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { hscope: "horoscope" }
  end
end
