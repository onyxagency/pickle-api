if ENV['RACK_ENV'] == "production"
	root = "/var/www/pickle.onyxla.co/current"
else
	root = "/var/www/pickle.onyxla.co/current"
end
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"

if ENV['RACK_ENV'] == "production"
	listen "/tmp/unicorn.pickle_api.sock"
else
	listen "/tmp/unicorn.pickle_api.sock"
end
worker_processes 1
timeout 30