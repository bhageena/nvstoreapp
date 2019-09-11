CREATE TABLE nv_store (
  id bigint NOT NULL,
  name text NOT NULL,
  value int NOT NULL, 
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE nv_store ADD PRIMARY KEY (id);

ALTER TABLE nv_store MODIFY id bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;