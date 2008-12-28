class CitasController < ApplicationController
    
    before_filter :login_required
  
    # GET /citas
    # GET /citas.xml
    def index
        @citas = Cita.search(params[:search],params[:page])      
        @citas_cont = Cita.howmany(params[:search])

        respond_to do |format|
            format.html # index.html.erb
            format.xml  { render :xml => @citas }
        end
    end
    
    # GET /citas/1
    # GET /citas/1.xml
    def show
        @cita = Cita.find(params[:id])
        quien = User.find_by_id(@cita.user_id)
        @autor = quien.login + " | " + quien.email
        
        respond_to do |format|
            format.html # show.html.erb
            format.xml  { render :xml => @cita }
        end
    end

    # GET /citas/new
    # GET /citas/new.xml
    def new
        @cita = Cita.new

        respond_to do |format|
            format.html # new.html.erb
            format.xml  { render :xml => @cita }
        end
    end

    # GET /citas/1/edit
    def edit
        @cita = Cita.find(params[:id])
    end

    # POST /citas
    # POST /citas.xml
    def create
        @cita = Cita.new(params[:cita])
        @cita.tag_list = params[:tags]
        respond_to do |format|
            if @cita.save
                flash[:notice] = "Cita guardada."
                if params[:remember_author]
                    session[:remember_author] = @cita.author
                    format.html { redirect_to :action => "new" }
                    format.xml  { render :xml => @cita, :status => :created, :location => @cita }
                else
                    session[:remember_author] = ""
                    format.html { redirect_to(@cita) }
                    format.xml  { render :xml => @cita, :status => :created, :location => @cita }
                end
            else
                format.html { render :action => "new" }
                format.xml  { render :xml => @cita.errors, :status => :unprocessable_entity }
            end
        end
    end

    # PUT /citas/1
    # PUT /citas/1.xml
    def update
        @cita = Cita.find(params[:id])
        @cita.tag_list = params[:tags]
        respond_to do |format|
            if @cita.update_attributes(params[:cita])
                flash[:notice] = 'Cita actualizada.'
                format.html { redirect_to(@cita) }
                format.xml  { head :ok }
            else
                format.html { render :action => "edit" }
                format.xml  { render :xml => @cita.errors, :status => :unprocessable_entity }
            end
        end
    end

    # DELETE /citas/1
    # DELETE /citas/1.xml
    def destroy
        @cita = Cita.find(params[:id])
        @cita.destroy

        respond_to do |format|
            format.html { redirect_to(citas_url) }
            format.xml  { head :ok }
        end
    end
    
end
