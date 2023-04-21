class StaticpagesController < ApplicationController
  before_action :authenticate_user!

  def home
    render json: {
      message: "This is a secret message. You are seeing it because you have successfully logged in."
    }
  end
end
