class CreateJobinfos < ActiveRecord::Migration[7.0]
  def change
    create_table :jobinfos do |t|
      t.string :job_type
      t.string :job_title
      t.string :company_name
      t.string :type_of_payment
      t.integer :employment_start
      t.integer :employment_end
      t.text :job_review
      t.integer :user_id
      t.timestamps
    end
  end
end
