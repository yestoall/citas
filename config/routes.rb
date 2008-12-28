ActionController::Routing::Routes.draw do |map|
  map.resources :users

  map.resource :session

  map.resources :citas

  map.newcita     '/newcita',       :controller => 'citas', :action => 'new'
  
  map.logout      '/logout',        :controller => 'sessions', :action => 'destroy'
  map.login       '/login',         :controller => 'sessions', :action => 'new'

  map.root :controller => "citas"

  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
