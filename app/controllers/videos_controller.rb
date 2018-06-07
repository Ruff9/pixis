class VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  private

  def video_params
    params.require(:video).permit(:title, :presentation)
  end
end
