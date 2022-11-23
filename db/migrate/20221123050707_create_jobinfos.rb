class CreateJobinfos < ActiveRecord::Migration[7.0]
  def change
    create_table :jobinfos do |t|
      t.string :job_type
      t.string :job_title
      t.string :company_name
      t.string :type_of_payment
      # t.int :years_of_employment Change to MMYYYY FORMAT
      t.int :employment_start
      t.int :employment_end
      t.text :job_review
      t.timestamps
    end
  end
end
