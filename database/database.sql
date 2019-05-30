CREATE DATABASE angulardb1;

USE angulardb1;

CREATE TABLE administrador (
  id_admin int(11) NOT NULL,
  nombre_admin varchar(30),
  apellido_admin varchar(30),
  telefono varchar(30),
  email_admin varchar(30),
  nro_documento varchar(30),
  rol_admin varchar(30),
  cod_equipo int(11),
   image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Estructura de tabla para la tabla `equipos`

CREATE TABLE equipos (

  id_equipo int(30) NOT NULL,
  nombre_eq varchar(30),
  region varchar(30),
  tag varchar(30),
  categoria_eq varchar(30),
  cod_organizacion int(11),
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO equipos (id_equipo, nombre_eq, region, tag, categoria_eq, cod_organizacion) VALUES
(1, 'Legends', 'Cali', 'LB', 'Battle Royale', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gerente`
--

CREATE TABLE gerente (
  id_gerente int(11) NOT NULL,
  nro_documento varchar(30),
  nombre varchar(30) ,
  apellido varchar(30),
  telefono varchar(30),
  email varchar(30),
  usuario varchar(30),
  contraseña varchar(30),
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--
-- Volcado de datos para la tabla `gerente`
--

INSERT INTO gerente (id_gerente, nro_documento, nombre, apellido, telefono, email, usuario, contraseña) VALUES
(1, '1133', 'Stephen ', 'Ale', '423', 'Ale@gmail.com', 'Ale123', '1133');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE jugadores (
  id int(30) NOT NULL,
  nombre varchar(255),
  apellido varchar(255),
  telefono varchar(30),
  email varchar(255),
  tipo_doc varchar(3),
  nro_doc varchar(255),
  fecha_nac varchar(30),
  cod_equipo int(11),
  puntuacion varchar(255),
  username varchar(255),
  password varchar(255),
  image varchar(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO jugadores (id, nombre, apellido, telefono, email, tipo_doc, nro_doc, fecha_nac, cod_equipo, puntuacion, username, password) VALUES
(1, 'Stewen', 'Gil', '423', 'stewen@gmail.com', 'CC', '1122', '01/01/1999', 1, '200', 'leidcrop', '1122'),
(2, 'Edward', 'Santa', '423', 'edw@hotmail.com', 'CC', '1123', '29/06/1998', 1, '250', 'Crop', '1123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizacion`
--

CREATE TABLE organizacion (
  id_organizacion int(11),
  nombre_org varchar(30),
  ubicacion varchar(30),
  email_org varchar(30),
  cod_gerente int(11),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--
-- Volcado de datos para la tabla `organizacion`
--

INSERT INTO organizacion (id_organizacion, nombre_org, ubicacion, email_org, cod_gerente) VALUES
(1, 'TeamLegend', 'Cali', 'TeamLegend@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE administrador
  ADD PRIMARY KEY (id_admin),
  ADD KEY cod_equipo (cod_equipo);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE equipos
  ADD PRIMARY KEY (id_equipo),
  ADD KEY cod_organizacion (cod_organizacion);

--
-- Indices de la tabla `gerente`
--
ALTER TABLE gerente
  ADD PRIMARY KEY (id_gerente);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE jugadores
  ADD PRIMARY KEY (id),
  ADD KEY cod_equipo (cod_equipo);

--
-- Indices de la tabla `organizacion`
--
ALTER TABLE organizacion
  ADD PRIMARY KEY (id_organizacion),
  ADD KEY cod_gerente (cod_gerente);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE administrador
  MODIFY id_admin int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE equipos
  MODIFY id_equipo int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `gerente`
--
ALTER TABLE gerente
  MODIFY id_gerente int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE jugadores
  MODIFY id int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `organizacion`
--
ALTER TABLE organizacion
  MODIFY id_organizacion int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE administrador
  ADD CONSTRAINT administrador_ibfk_1 FOREIGN KEY (cod_equipo) REFERENCES equipos (id_equipo);

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE equipos
  ADD CONSTRAINT equipos_ibfk_1 FOREIGN KEY (cod_organizacion) REFERENCES organizacion (id_organizacion);

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE jugadores
  ADD CONSTRAINT jugadores_ibfk_1 FOREIGN KEY (cod_equipo) REFERENCES equipos (id_equipo);

--
-- Filtros para la tabla `organizacion`
--
ALTER TABLE organizacion
  ADD CONSTRAINT organizacion_ibfk_1 FOREIGN KEY (cod_gerente) REFERENCES gerente (id_gerente);
COMMIT;

DESCRIBE jugadores;
DESCRIBE equipos;
DESCRIBE gerente;
DESCRIBE organizacion;
DESCRIBE administrador;

