ALTER TABLE users_login (
    ADD id INT GENERATED ALWAYS AS IDENTITY,
    ADD phone_number INT not null,
    ADD name text not null,
    ADD description text,
    ADD start_date date,
    ADD end_date date,
    ADD active bool,
    ADD created_at timestampz,
    ADD updated_at timestampz,
);

CREATE TABLE business(
    id INT GENERATED ALWAYS AS IDENTITY,
    vat_number varchar(256) not null,
    contact INT not null,
    active bool,
);

CREATE TABLE campaign (
    id INT GENERATED ALWAYS AS IDENTITY,
    customer_id INT,
    business_id INT,
    name text not null,
    description text not null,
    start_date date,
    end_date date,
    active bool not null,
    created_at timestampz,
    updated_at timestampz,
    CONSTRAINT fk_business
    FOREIGN KEY(business_id)
    REFERENCES business(id),
    CONSTRAINT fk_customer
    FOREIGN KEY(customer_id)
    REFERENCES users_login(id)
);

ALTER TABLE users_login RENAME TO customer;

CREATE TABLE business_role(
    id text,
);

CREATE TABLE campaign_role(
    id text,
);

CREATE TABLE business_login (
    id INT GENERATED ALWAYS AS IDENTITY,
    business_id INT,
    email text not null,
    username text not null,
    role text,
    created_at timestampz,
    updated_at timestampz,
    CONSTRAINT fk_business
    FOREIGN KEY(business_id)
    REFERENCES business(id),
    CONSTRAINT fk_business_role
    FOREIGN KEY(role)
    REFERENCES business_role(id)
);

CREATE TABLE campaign_user(
    role text,
    campaign_id INT,
    customer_id INT,
    CONSTRAINT fk_customer
    FOREIGN KEY(customer_id)
    REFERENCES customer(id),
    CONSTRAINT fk_campaign
    FOREIGN KEY(campaign_id)
    REFERENCES campaign(id),
    CONSTRAINT fk_campaign_role
    FOREIGN KEY(role)
    REFERENCES campaign_role(id)
);
