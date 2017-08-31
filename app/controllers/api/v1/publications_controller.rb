class API::V1::PublicationsController < API::ApplicationController

  def index
    render json: {status: "error", code: 3000, message: "Can't find purchases without start and end date"}
  end

end
