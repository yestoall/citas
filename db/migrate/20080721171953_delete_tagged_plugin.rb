class DeleteTaggedPlugin < ActiveRecord::Migration
  def self.up
      drop_table :taggings
      drop_table :tags
  end

  def self.down
      drop_table :taggings
      drop_table :tags
  end
end
