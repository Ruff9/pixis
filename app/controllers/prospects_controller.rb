class ProspectsController < ApplicationController
  def new
    @prospect = Prospect.new
  end

  def create
    @prospect = Prospect.new(prospect_params)

    if @prospect.save
      redirect_to root_path
    else
      p '*'*52
      p @prospect.errors
    end
  end

  private

  def prospect_params
    params.require(:prospect).permit(:email, :message)
  end
end
