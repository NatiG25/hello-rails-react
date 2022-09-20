class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.first.text
    render json: {
      text: @messages
    }
  end
end
