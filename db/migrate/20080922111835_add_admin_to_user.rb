class AddAdminToUser < ActiveRecord::Migration
  def self.up
      add_column :users, :admin, :boolean
      
      @users = User.find(:first)
      @users.update_attribute(:admin,true)
  end

  def self.down
      remove column :users, :admin
  end
end
