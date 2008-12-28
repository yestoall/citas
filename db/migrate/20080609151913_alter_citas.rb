class AlterCitas < ActiveRecord::Migration
  def self.up
    change_column :citas, :text, :text
  end

  def self.down
    change_column :citas, :text, :string
  end
end
