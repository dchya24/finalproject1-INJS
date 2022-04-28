--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-04-29 06:44:22

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 33624)
-- Name: reflections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reflections (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    success character varying(100) NOT NULL,
    low_point character varying(191) NOT NULL,
    take_away character varying(191) NOT NULL,
    owner_id uuid NOT NULL,
    created_date timestamp with time zone NOT NULL,
    modified_date timestamp with time zone NOT NULL
);


ALTER TABLE public.reflections OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 33361)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email character varying(64) NOT NULL,
    password character varying(191) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3313 (class 0 OID 33624)
-- Dependencies: 210
-- Data for Name: reflections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reflections (id, success, low_point, take_away, owner_id, created_date, modified_date) FROM stdin;
14845de2-1641-4d8a-bc69-2a2df41c54c6	Ngapain Ya	Halooo	get away from mmy way	e300eb27-9d72-4b95-928e-87182d77c155	2022-04-24 22:14:39.476+07	2022-04-24 22:14:39.476+07
5fcf9b95-7372-4d33-a687-c5346e7733ce	Makan ayam kali Ya	Halooo	get away from mmy way	e300eb27-9d72-4b95-928e-87182d77c155	2022-04-24 22:14:50.603+07	2022-04-24 22:14:50.603+07
c29a0ff8-92ec-41dc-826f-5fcdf94fdb1f	Beli laptop	Halooo	get away from mmy way	e300eb27-9d72-4b95-928e-87182d77c155	2022-04-24 22:15:07.326+07	2022-04-24 22:15:07.326+07
0e8e4c10-ffdc-4c70-85a1-fbcce24b53d0	Beli Sepeda	Kapan ya	get away from my way	e7dac2cf-d529-4c62-8749-f3c691760e72	2022-04-26 15:45:04.384+07	2022-04-26 15:45:04.384+07
a38e82d4-5ed1-4f07-b406-3350fd293e23	Beli Ayam	Kapan ya	get away from my way	5ff742ac-dc48-403a-a347-911be83c4220	2022-04-26 21:36:42.718+07	2022-04-26 21:36:42.718+07
57f42e0c-5103-401b-8b94-679cef40353b	Beli Ayam	Kapan ya	get away from my way	5ff742ac-dc48-403a-a347-911be83c4220	2022-04-26 21:39:41.904+07	2022-04-26 21:39:41.904+07
50d8fec3-0cb4-4fe8-8097-820c930c1af6	Beli	Kapan ya	get away from my way	5ff742ac-dc48-403a-a347-911be83c4220	2022-04-27 08:35:19.401+07	2022-04-27 08:35:19.401+07
df16af8d-f611-4ebc-ad30-84885e3b71bf	Today is Selasa	Older low key point	Older Take away	5ff742ac-dc48-403a-a347-911be83c4220	2022-04-26 21:36:23.42+07	2022-04-27 08:48:16.201+07
444abc70-e0fb-4937-9444-b341232aba56	Beli	Kapan ya	get away from my way	5ff742ac-dc48-403a-a347-911be83c4220	2022-04-27 09:37:05.847+07	2022-04-27 09:37:05.847+07
\.


--
-- TOC entry 3312 (class 0 OID 33361)
-- Dependencies: 209
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
b4850d30-0fec-49df-ab95-2c575b94a0a3	test@test.com	$2b$10$6YIQwF7uyhZDnjwO9/DVWOPA9n1SaOw2EADeOTrQLQ8TrLEj2so2y
325075e1-242d-4b3b-9b27-8fc5a2fb1891	user2@test.com	$2b$10$6YIQwF7uyhZDnjwO9/DVWOPA9n1SaOw2EADeOTrQLQ8TrLEj2so2y
3e616168-fd0a-4df6-8470-ac16d62da1ab	test@test.com	$2b$10$qLVEssIucCsOMfwnWbRjXe4A/fxxqyXcVQISMwnJ.83/Wu1ji/ApS
c24d197b-d0e8-4c7c-9e44-3cee5402cbac	user2@test.com	$2b$10$qLVEssIucCsOMfwnWbRjXe4A/fxxqyXcVQISMwnJ.83/Wu1ji/ApS
e7dac2cf-d529-4c62-8749-f3c691760e72	test2@test.com	$2b$10$iRy0/zyt6FyktpyRmV1rR.qKasIqqyKRsgVIdIrit7AW2Zy1ivVP2
8b8a4fa4-6d7d-4505-9708-f722500a3604	test3@test.com	$2b$10$ExmsPdmdErGpjiomfa6mVO3ivpCLHKkn2z5e9AXlKFrph5ovhY1Q2
c36499b5-0011-42a9-9e3a-d995e25baed3	apa@test.com	$2b$10$bvDOa4TC02.D/aqi6si/VeAZR19U3RFo.s637RSHlISN0lFAjoeQ.
3a3c8a02-e621-4e06-8dbb-58266c7f022e	apa1@test.com	$2b$10$rf3EysxjZAVFGC9JymAECegpeoX1amJAc3QPlHaG5n0wnQ59Tb0qq
e300eb27-9d72-4b95-928e-87182d77c155	apa2@test.com	$2b$10$PKVhTdCh369t18IDmyTJm.Cq8JlbQlUqU7DyX90ekll.R7vzBFNIK
5ff742ac-dc48-403a-a347-911be83c4220	apa12@test.com	$2b$10$ryyDIQ3ufY10hpGfMjpwJu0YiFeM3TZE3R3XbCvSAd8.LJ98Yi77i
fc6c775c-42c6-4081-8bfe-048d6381b72b	apa122@test.com	$2b$10$TdS.axCMHNL/I9C2Xzq9i.4z5aB3bH05DnBhyKkldIVQxdrmLhtYu
\.


--
-- TOC entry 3172 (class 2606 OID 33629)
-- Name: reflections reflections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reflections
    ADD CONSTRAINT reflections_pkey PRIMARY KEY (id);


--
-- TOC entry 3170 (class 2606 OID 33366)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2022-04-29 06:44:23

--
-- PostgreSQL database dump complete
--

