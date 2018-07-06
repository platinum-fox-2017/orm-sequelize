--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.11
-- Dumped by pg_dump version 9.5.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE "SequelizeMeta" OWNER TO postgres;

--
-- Name: articles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE articles (
    id integer NOT NULL,
    title character varying(255),
    body text,
    id_author integer,
    id_tag integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE articles OWNER TO postgres;

--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE articles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE articles_id_seq OWNER TO postgres;

--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE articles_id_seq OWNED BY articles.id;


--
-- Name: authors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE authors (
    id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    religion character varying(255),
    gender character varying(255),
    age integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE authors OWNER TO postgres;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE authors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE authors_id_seq OWNER TO postgres;

--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE authors_id_seq OWNED BY authors.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tags (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE tags OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tags_id_seq OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tags_id_seq OWNED BY tags.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY articles ALTER COLUMN id SET DEFAULT nextval('articles_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY authors ALTER COLUMN id SET DEFAULT nextval('authors_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tags ALTER COLUMN id SET DEFAULT nextval('tags_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SequelizeMeta" (name) FROM stdin;
20180219191205-create-article.js
20180219191404-create-tag.js
20180219191545-create-author.js
\.


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY articles (id, title, body, id_author, id_tag, "createdAt", "updatedAt") FROM stdin;
2	Using Session On Express JS	Before we use Session the one thing that you should know is about session it self, you need to .... ya that`s it	2	3	2018-02-20 20:32:21.009+07	2018-02-20 20:32:21.009+07
3	Using Javascript PostgreSQL	Cara menggunakan Sequelize untuk javascript dan PostgreSQL	8	2	2018-02-21 17:34:08.158+07	2018-02-21 17:34:08.158+07
1	ganti nama title	ganti body	7	2	2018-02-20 20:32:21.008+07	2018-02-21 18:15:49.949+07
\.


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('articles_id_seq', 3, true);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY authors (id, first_name, last_name, religion, gender, age, "createdAt", "updatedAt") FROM stdin;
1	erwin	ramadhan	islam	male	20	2018-02-20 02:29:09.724+07	2018-02-20 02:29:09.729+07
2	cu chu	lain	islam	male	22	2018-02-20 02:31:32.337+07	2018-02-20 02:31:32.34+07
3	ryougi	shiki	budha	female	19	2018-02-20 02:32:30.686+07	2018-02-20 02:32:30.69+07
4	nara	sikamaru	islam	male	17	2018-02-20 02:47:51.893+07	2018-02-20 03:37:48.486+07
6	Agung	Prabowo	d	\N	25	2018-02-21 17:10:14.572+07	2018-02-21 17:10:14.572+07
7	Agung	Prabowo	d	\N	25	2018-02-21 17:11:32.872+07	2018-02-21 17:11:32.872+07
8	Agung	Prabowo	islam	male	25	2018-02-21 17:11:52.084+07	2018-02-21 17:11:52.084+07
10	Agung	Prabowo	islam	male	25	2018-02-21 17:59:08.888+07	2018-02-21 17:59:08.888+07
9	Agung	Prabowo	budha	male	26	2018-02-21 17:21:23.688+07	2018-02-21 18:09:45.846+07
\.


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('authors_id_seq', 10, true);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tags (id, name, "createdAt", "updatedAt") FROM stdin;
1	Javascript	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
2	Middleware	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
3	Session	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
4	Multer	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
5	Functional Programming	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
6	Asynchronous	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
7	Synchronous	2018-02-20 20:32:01.138+07	2018-02-20 20:32:01.138+07
10	SAP ABAP	2018-02-21 17:28:20.886+07	2018-02-21 17:28:20.886+07
11	SAP Leonardo IoT	2018-02-21 17:28:43.08+07	2018-02-21 17:28:43.08+07
9	GantiNamaTag	2018-02-21 17:26:18.978+07	2018-02-21 18:12:35.411+07
\.


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tags_id_seq', 11, true);


--
-- Name: SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: articles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: authors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

