
set :application, "citas"
 
set :deploy_to, "/Users/nachorapallo/Sites/citas/"
 
set :scm, :git
set :repository, "nacho@yestoall.dyndns.org:citas.git"
set :branch, "master"
set :deploy_via, :remote_cache
 
set :user, 'nacho'
set :ssh_options, { :forward_agent => true }
 
role :app, "yestoall.dyndns.org"
role :web, "yestoall.dyndns.org"
role :db,  "yestoall.dyndns.org", :primary => true
 
namespace :deploy do
  desc "Restarting mod_rails with restart.txt"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "touch #{current_path}/tmp/restart.txt"
  end
 
  [:start, :stop].each do |t|
    desc "#{t} task is a no-op with mod_rails"
    task t, :roles => :app do ; end
  end
end

#set :application, "yestoall.dyndns.org"
#set :repository,  "."

#set :user, "nacho"
#set :deploy_to, "/Users/nachorapallo/Sites/citas/"
#set :use_sudo, true

#set :scm, :git
#set :deploy_via, :copy
#set :copy_remote_dir, "/Users/nachorapallo"

#role :app, :application
#role :web, :application
#role :db,  :application, :primary => true

#namespace :deploy do
#    desc "Restarting mod_rails with restart.txt"
#    task :restart, :roles => :app, :except => { :no_release => true } do
#        run "touch #{current_path}/tmp/restart.txt"
#    end
#    
#    [:start, :stop].each do |t|
#        desc "#{t} task is a no-op with mod_rails"
#        task t, :roles => :app do ; end
#    end
#end
