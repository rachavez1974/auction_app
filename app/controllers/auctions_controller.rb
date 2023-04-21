class AuctionsController < ApplicationController
  before_action :set_auction, only: %i[ show update destroy ]
  before_action :find_user, only: %i[ create update us]

  # GET /auctions
  def index
    @auctions = Auction.all

    render json: @auctions
  end

  # GET /auctions/1
  def show
    render json: @auction
  end

  def user_auctions
    user = User.find_by(email: params[:email])
    if user.bidder
      @auction = user.bidder.auctions.last
      render json: @auction
    else
      @auction = user.auctioneer.auctions.last
      render json: @auction, status: :created, location: @auction
    end
  end

  # POST /auctions
  def create
    @auction = Auction.new(auction_params)

    if @auction.save
      render json: @auction, status: :created, location: @auction
    else
      render json: @auction.errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /auctions/1
  def update
    if @auction.update(auction_params)
      render json: @auction
    else
      render json: @auction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auctions/1
  def destroy
    @auction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_auction
      @auction = Auction.find(params[:id])
    end

    def find_user
      @user = User.find_by(email: params[:user][:email])
    end

    # Only allow a list of trusted parameters through.
    def auction_params
      if @user.bidder
        params.fetch(:auction, {}).merge({bidder_id: @user.bidder.id}).permit(:description, :current, :ask, :additional_amount_one, :additional_amount_two, :bidder_id)
      else
        params.fetch(:auction, {}).merge({auctioneer_id: @user.auctioneer.id}).permit(:description, :current, :ask, :additional_amount_one, :additional_amount_two, :auctioneer_id)
      end
    end
end
