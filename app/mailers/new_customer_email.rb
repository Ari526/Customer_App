class NewCustomerEmail < ApplicationMailer
	def notify_customer(customer)

        @customer = customer
         
		mail(to: @customer.email, subject: "welcome" )
	end
end
