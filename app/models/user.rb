class User < ApplicationRecord
    has_secure_password

    #Add Relationship to job info
    validates :username, presence: true, uniqueness: true
end
