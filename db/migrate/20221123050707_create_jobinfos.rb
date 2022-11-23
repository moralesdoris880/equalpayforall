class CreateJobinfos < ActiveRecord::Migration[7.0]
  def change
    create_table :jobinfos do |t|

      t.timestamps
    end
  end
end
