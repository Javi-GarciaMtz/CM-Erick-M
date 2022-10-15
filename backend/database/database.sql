CREATE DATABASE IF NOT EXISTS cm_erick_m;
USE cm_erick_m;

-- ========================================================

CREATE TABLE IF NOT EXISTS users(
    id  INT(255) AUTO_INCREMENT NOT NULL,
    name    VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    email   VARCHAR(255) NOT NULL,
    phone    VARCHAR(255) NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS properties(
    id  INT(255) AUTO_INCREMENT NOT NULL,
    country VARCHAR(50),
    state   VARCHAR(100),
    video_link  VARCHAR(255),
    description TEXT,
    CONSTRAINT pk_properties PRIMARY KEY(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS locations(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    map_img VARCHAR(255),
    name_w_motto VARCHAR(255),
    location_text VARCHAR(255),
    points_interest TEXT,
    maps_location   VARCHAR(255),
    g_earth_location    VARCHAR(255),
    CONSTRAINT pk_locations PRIMARY KEY(id),
    CONSTRAINT fk_properties_locations FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS virtual_tours(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    description_1 TEXT,
    model_1 VARCHAR(255),
    model_img_1 VARCHAR(255),
    description_2 TEXT,
    model_2 VARCHAR(255),
    model_img_2 VARCHAR(255),
    CONSTRAINT pk_virtual_tours PRIMARY KEY(id),
    CONSTRAINT fk_properties_virtual_tours FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS surfaces_amenities(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    batch_1 VARCHAR(255),
    description_1 TEXT,
    img_1 VARCHAR(255),
    batch_2 VARCHAR(255),
    description_2 TEXT,
    img_2 VARCHAR(255),
    things_in_batch TEXT,
    amenitie_1 VARCHAR(255),
    amenitie_vid_1 TEXT,
    amenitie_virtual_tour_1 VARCHAR(255),
    amenitie_2 VARCHAR(255),
    amenitie_vid_2 TEXT,
    amenitie_virtual_tour_2 VARCHAR(255),
    CONSTRAINT pk_surfaces_amenities PRIMARY KEY(id),
    CONSTRAINT fk_properties_surfaces_amenities FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS financings(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    benefits_list   TEXT,
    description_1 TEXT,
    finance_plans TEXT,
    finance_able TEXT,
    CONSTRAINT pk_financings PRIMARY KEY(id),
    CONSTRAINT fk_properties_financings FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS deliveries(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    title TEXT,
    time_line TEXT,
    description_1 TEXT,
    CONSTRAINT pk_deliveries PRIMARY KEY(id),
    CONSTRAINT fk_properties_deliveries FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================'

CREATE TABLE IF NOT EXISTS mater_plans(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    title TEXT,
    img TEXT,
    description_1 TEXT,
    CONSTRAINT pk_mater_plans PRIMARY KEY(id),
    CONSTRAINT fk_properties_mater_plans FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;
