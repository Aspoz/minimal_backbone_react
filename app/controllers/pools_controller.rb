class PoolsController < ApplicationController
  respond_to :json

  def index
    @pools = Pool.all
    respond_with @pools
  end

  def show
    @pool = Pool.find(params[:id])
    respond_with @pool
  end

  private

  def pools_params
    params.require(:pool).permit(:name)
  end
end
