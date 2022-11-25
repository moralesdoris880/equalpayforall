Rails.application.routes.draw do
  # route to test your configuration
  resources :jobinfos
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/user_jobs', to: 'jobinfos#user_jobs'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
