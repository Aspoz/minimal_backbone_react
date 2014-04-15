class PoolsController < ApplicationController
  respond_to :json

  def index
    @pools = Pool.all
  end

  def show
    @pool = Pool.find(params[:id])
  end

  private

  def pools_params
    params.require(:pool).permit(:name)
  end
end
