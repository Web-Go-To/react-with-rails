# frozen_string_literal: true

def stub_gem_version(version)
  stub_const("ReactOnRails::VERSION", version)
end
