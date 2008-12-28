class AddCitasUserId < ActiveRecord::Migration
  def self.up
      add_column :citas, :user_id, :integer, :default => 0
      
      # nacho es el autor de todas las citas
      @citas = Cita.find(:all)
      @citas.each do |cita|
          cita.update_attribute(:user_id, 1)
      end
  end

  def self.down
      remove_column :citas, :user_id
  end
end
