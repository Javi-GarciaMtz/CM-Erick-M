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
    title   VARCHAR(100),
    video_link  VARCHAR(255),
    brochure VARCHAR(255),
    description TEXT,
    CONSTRAINT pk_properties PRIMARY KEY(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS locations(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    map_img TEXT,
    title VARCHAR(255),
    reference TEXT,
    points_interest TEXT,
    maps_location   TEXT,
    g_earth_location    TEXT,
    CONSTRAINT pk_locations PRIMARY KEY(id),
    CONSTRAINT fk_properties_locations FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================
-- >>>>>> Tours virtuales quedan descartados de esta primera version del proyecto

-- CREATE TABLE IF NOT EXISTS virtual_tours(
--     id INT(255) AUTO_INCREMENT NOT NULL,
--     property_id INT(255) NOT NULL,
--     description TEXT,
--     model VARCHAR(255),
--     model_img VARCHAR(255),
--     CONSTRAINT pk_virtual_tours PRIMARY KEY(id),
--     CONSTRAINT fk_properties_virtual_tours FOREIGN KEY(property_id) REFERENCES properties(id)
-- )ENGINE=InnoDb;

-- ========================================================

--- es para lotes
CREATE TABLE IF NOT EXISTS surfaces(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    type_surfaces VARCHAR(255),
    title VARCHAR(255),
    img TEXT,
    description TEXT,
    CONSTRAINT pk_surfaces PRIMARY KEY(id),
    CONSTRAINT fk_properties_surfaces FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS amenities(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    title VARCHAR(255),
    img TEXT,
    video TEXT,
    description TEXT,
    CONSTRAINT pk_amenities PRIMARY KEY(id),
    CONSTRAINT fk_properties_amenities FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;

-- ========================================================

CREATE TABLE IF NOT EXISTS financings(
    id INT(255) AUTO_INCREMENT NOT NULL,
    property_id INT(255) NOT NULL,
    benefits_list   TEXT,
    description_1 TEXT,
    finance_plans TEXT,
    captions TEXT,
    finance_table JSON,
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
    img VARCHAR(255),
    description_1 TEXT,
    CONSTRAINT pk_mater_plans PRIMARY KEY(id),
    CONSTRAINT fk_properties_mater_plans FOREIGN KEY(property_id) REFERENCES properties(id)
)ENGINE=InnoDb;
