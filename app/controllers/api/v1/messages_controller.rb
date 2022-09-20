class Api::V1::MessagesController < ApplicationController
    def index 
        render json: @message;
    end
end
