class CreateBidders < ActiveRecord::Migration[7.0]
  def change
    create_table :bidders do |t|
      t.string :name
      t.integer :bid
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
