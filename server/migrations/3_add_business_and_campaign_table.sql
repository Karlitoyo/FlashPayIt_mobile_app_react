CREATE TABLE campaign (
    customer_id varchar(256),
    campaign_id varchar(256),
    name varchar(256),
    description varchar(256),
    start_date varchar(256),
    end_date varchar(256),
    active varchar(256),
    created_at timestampz,
    updated_at timestampz,
);

CREATE TABLE business_login (
    business_id varchar(256),
    email varchar(256),
    username varchar(256),
    contact varchar(256),
    vat_number varchar(256),
    active varchar(256),
    created_at timestampz,
    updated_at timestampz,
);

CREATE TABLE business()
CREATE TABLE business_user(business_id, user_id, role)
CREATE TABLE business_campaign()
CREATE TABLE business_campaign_user()
CREATE TABLE role()