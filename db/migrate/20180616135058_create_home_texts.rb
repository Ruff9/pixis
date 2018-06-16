class CreateHomeTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :home_texts do |t|
      t.text :content
      t.timestamps
    end
  end
end
