class AlterCitas2 < ActiveRecord::Migration
  def self.up
    change_column :citas, :text, :text, :limit => 512, :default => ""
  end

  def self.down
    change_column :citas, :text, :text, :limit => 255
  end
end
