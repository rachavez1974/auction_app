class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.text :description
      t.integer :current
      t.integer :ask
      t.integer :additional_amount_one
      t.integer :additional_amount_two
      t.references :bidder, null: true, foreign_key: true
      t.references :auctioneer, null: true, foreign_key: true

      t.timestamps
    end
  end
end
