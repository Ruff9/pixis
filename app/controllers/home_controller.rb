class HomeController < ApplicationController
  def show
    @prospect = Prospect.new
  end

  private

  def prospect_params
    params.require(:prospect).permit(:email, :message)
  end
end
