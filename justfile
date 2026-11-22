# List all available commands
default:
  @just --list

# Build the Jekyll site locally
build:
  bundle config set --local path vendor/bundle
  bundle check >/dev/null || bundle install
  bundle exec jekyll build

# Serve the blog locally with live reload
serve:
  bundle config set --local path vendor/bundle
  bundle check >/dev/null || bundle install
  bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
