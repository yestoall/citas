class CreateCitas < ActiveRecord::Migration
  def self.up
    create_table :citas do |t|
      t.string :text
      t.string :author

      t.timestamps
    end
  end

  def self.down
    drop_table :citas
  end
end
