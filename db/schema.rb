# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_10_172712) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auctioneers", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_auctioneers_on_user_id"
  end

  create_table "auctions", force: :cascade do |t|
    t.text "description"
    t.integer "current"
    t.integer "ask"
    t.integer "additional_amount_one"
    t.integer "additional_amount_two"
    t.bigint "bidder_id"
    t.bigint "auctioneer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["auctioneer_id"], name: "index_auctions_on_auctioneer_id"
    t.index ["bidder_id"], name: "index_auctions_on_bidder_id"
  end

  create_table "bidders", force: :cascade do |t|
    t.string "name"
    t.integer "bid"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_bidders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.json "user_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "auctions", "auctioneers"
  add_foreign_key "auctions", "bidders"
  add_foreign_key "bidders", "users"
end
