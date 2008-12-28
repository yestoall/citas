class AddCitasUserIndex < ActiveRecord::Migration
  def self.up
      add_index :citas, :user_id
  end

  def self.down
      remove_index :citas, :user_id
  end
end
