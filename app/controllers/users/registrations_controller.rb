# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  respond_to :json

  private

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [ :bidder_attributes => [:name, :bid], :auctioneer_attributes => [:name]])
  end

  def respond_with(resource, options = {})
    if resource.persisted?
      render json: {
        status: {
          code: 200,
          message: 'Sign up is successful.',
          data: resource
        }
      }
    else
      render json: {
        status: {
          message: 'User not created',
          errors: resource.errors.full_messages
        },
        status: :unprocessable_entity
      }
    end
  end
end
