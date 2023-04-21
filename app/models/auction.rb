class Auction < ApplicationRecord
  belongs_to :bidder, optional: true
  belongs_to :auctioneer, optional: true
end
