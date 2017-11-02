-- Connects to the database
-- \c como_say_what;

-- Removes preexisting versions of table(s)
DROP TABLE IF EXISTS words;

-- Builds the necessary table(s)
CREATE TABLE words (
  id SERIAL PRIMARY KEY,
  english VARCHAR(255),
  french VARCHAR(255),
  italian VARCHAR(255),
  german VARCHAR(255),
  spanish VARCHAR(255),
  russian VARCHAR(255),
  korean VARCHAR(255),
  hebrew VARCHAR(255),
  hungarian VARCHAR(255),
  cantonese VARCHAR(255),
  portuguese VARCHAR(255),
  dutch VARCHAR(255)
);

-- #Appropriately primes most used column(s)
CREATE INDEX ON words (english);
