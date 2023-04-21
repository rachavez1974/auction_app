class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_one :bidder
  has_one :auctioneer
  accepts_nested_attributes_for :bidder, reject_if: proc { |attributes| attributes['name'].blank? }
  accepts_nested_attributes_for :auctioneer, reject_if: proc { |attributes| attributes['name'].blank? }

  def jwt_payload
    super
  end
end
