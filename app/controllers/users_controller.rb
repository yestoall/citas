class UsersController < ApplicationController
  # Be sure to include AuthenticationSystem in Application Controller instead
  include AuthenticatedSystem

  before_filter :login_required
  
  def index
    @users = User.find(:all)
  end
  
  def show
    @user = User.find(params[:id])
    @user_citas_count = Cita.count(:all, :conditions => ["user_id = ?", @user.id])
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    
    redirect_to(user_url)
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    
    if (@user.update_attributes(params[:user]))
      flash[:notice] = 'Usuario actualizado'
      redirect_to(user_url)
    else
      render :action => "edit"
    end
  end
  
  # render new.rhtml
  def new
  end

  def create
    cookies.delete :auth_token
    # protects against session fixation attacks, wreaks havoc with 
    # request forgery protection.
    # uncomment at your own risk
    # reset_session
    @user = User.new(params[:user])
    @user.save
    if @user.errors.empty?
      self.current_user = @user
      redirect_back_or_default('/')
      flash[:notice] = "Ya estas registrado :-)"
    else
      render :action => 'new'
    end
  end

end
