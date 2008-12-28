class CreateTags < ActiveRecord::Migration
    
    def self.up
        create_table :tags do |t|
            t.column    :name,          :string, :limit => 100, :default => "", :null => false
            t.column    :description,   :string, :limit => 255, :default => "", :null => true
            t.timestamps
        end
        
        create_table :citas_tags, :id => false do |t|
            t.column    :cita_id,   :integer, :null => false
            t.column    :tag_id,    :integer, :null => false
        end
        add_index :citas_tags, :cita_id
        add_index :citas_tags, :tag_id
    end

    def self.down
        drop_table :citas_tags
        drop_table :tags
    end
end
