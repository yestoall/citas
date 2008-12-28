class Cita < ActiveRecord::Base    
    acts_as_taggable_on :tags
    belongs_to :user

    def self.search(search,page)
        perpage = 5
        if (search && search != "")
            cond = "%#{search}%"
            paginate(
                :all,
                :conditions     => ["text LIKE ? OR author LIKE ?", cond, cond],
                :per_page       => perpage,
                :page           => page)
        else
            paginate(
                :all,
                :order          => "created_at DESC",
                :per_page       => perpage,
                :page           => page)
        end 
    end
    
    def self.howmany(search)
        if (search && search != "")
            cond = "%#{search}%"
            count(:all, :conditions => ["text LIKE ? OR author LIKE ?", cond, cond])
        else
            count(:all)
        end 
    end
    
end
