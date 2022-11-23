class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized, only:  :create 

    def show
        current_user = User.find_by(id:session[:user_id])
        if current_user
            render json: current_user
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def check_jobs
        current_user = User.find_by(id:session[:user_id])
        if current_user
            render json: current_user.drinks
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render_unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username,:password,:password_confirmation,:email)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end
end
