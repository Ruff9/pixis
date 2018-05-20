class CreateProspects < ActiveRecord::Migration[5.2]
  def change
    create_table :prospects do |t|
      t.string :email
      t.text :message
      t.timestamps
    end
  end
end
