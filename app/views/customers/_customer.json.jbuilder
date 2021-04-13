json.extract! customer, :id, :first_name, :last_name, :string, :email, :phone, :twitter, :created_at, :updated_at
json.url customer_url(customer, format: :json)
