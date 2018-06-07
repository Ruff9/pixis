class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :vimeo_reference
      t.string :title
      t.text :presentation
      t.timestamps
    end
  end
end
