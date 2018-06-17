class HomeController < ApplicationController
  def show
    @prospect = Prospect.new
    @home_videos = HomeVideo.all
    @home_texts = HomeText.all
    @team_members = TeamMember.all
    @clients = Client.all
  end

  private

  def prospect_params
    params.require(:prospect).permit(:email, :message)
  end
end
