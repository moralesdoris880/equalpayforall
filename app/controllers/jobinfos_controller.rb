class JobinfosController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        user = User.find_by(id:session[:user_id])
        if user
            render json: Jobinfo.all, status: :created
        else
            render json: {errors: ['Not found']}, status: :unauthorized
        end
    end

    def user_jobs
        user = User.find_by(id:session[:user_id])
        if user
            render json: user.jobinfo, status: :accepted
        else
            render json: {errors: ['Not found']}, status: :unauthorized
        end
    end

    def create
        current_user = User.find_by(id:session[:user_id])
        if current_user
            job = current_user.jobinfo.create!(jobinfo_params)
            render json: job
        else
            render json: {errors: ["Cannot Create"]}, status: :unauthorized
        end
    end

    def update
        user =  User.find_by(id: session[:user_id])
        job = user.jobinfo.find_by(id: params[:id])
        if job
            rating.update(job_params)
            render json: job, status: :accepted
        else
            render json: {error: 'Cannot Update'}, status: :not_found
        end
    end

    def destroy
        user =  User.find_by(id: session[:user_id])
        job = user.jobinfo.find_by(id: params[:id])
        if job
            job.destroy
            render json: {}
        else
            render json: {error: 'Cannot Destroy'}, status: :not_found
        end
    end

    private

    def jobinfo_params
        params.permit(:job_type, :job_title, :company_name, :type_of_payment, :employment_start, :employment_end,:job_review) 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end

end
