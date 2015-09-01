require "spec_helper"

module ReactOnRails
  RSpec.describe Configuration do
    it "be able to config default configuration of the gem" do
      ReactOnRails.configure do |config|
        config.bundle_js_file = "client/dist/server.js"
        config.prerender = false
      end

      expect(ReactOnRails.configuration.bundle_js_file).to eq("client/dist/server.js")
      expect(ReactOnRails.configuration.prerender).to eq(false)
    end
  end
end
