class Jobinfo < ActiveRecord::Migration[7.0]
    def change_job
      create_table :users do |t|
        t.string :job_type
        t.string :job_title
        t.string :company_name
        t.string :type_of_payment
        t.int :years_of_employment
        t.text :job_review
        t.timestamps
      end
    end
  end