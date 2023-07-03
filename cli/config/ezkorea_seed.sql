-- ================== TB_USER ================== --
INSERT INTO `tergel-db`.tb_user
(user_id, cpny_id, user_name, user_phone, user_phone1, user_email, pass_enc, last_login_date, email_verified_yn, email_verified_date, phone_verified_yn, phone_verified_date, use_yn, createdAt, updatedAt, deletedAt)
VALUES('bb6d876b-7360-47c7-895f-1a329adc7656', 'tugsbayar', 'tugsbayar', '88072346', '88647498', 'lion.tuguu@gmail.com', 'qwerty', '2023-02-01 00:00:00.000', 'N', NULL, 'N', NULL, 'Y', '2023-02-03 00:00:00.000', '2023-02-03 00:00:00.000', NULL);

-- ================== TB_MATERIAL ================== --
INSERT INTO `tergel-db`.tb_material
(material_id, material_name, descr, parent_material_id, material_code, status, use_yn, del_yn, createdAt, updatedAt, deletedAt)
VALUES('57c4d28a-275c-4957-a16e-70d4e5573071', 'Богино хугацааны урилга', 'Богино хугацааны урилга (c-3-1)', NULL, 'c-3-1', NULL, 'Y', 'N', '2023-02-01 00:00:00.000', '2023-02-01 00:00:00.000', NULL);


-- ================== TB_MATERIAL_DETAIL ================== --
INSERT INTO `tergel-db`.tb_material_detail
(material_detail_id, material_id, material_name, material_descr, material_type, material_source_id, allow_file_ext, use_yn, del_yn, createdAt, updatedAt, deletedAt)
VALUES('64657264-a14b-44e0-974c-9c8fb60ec5a8', '57c4d28a-275c-4957-a16e-70d4e5573071', '3.5x4.5 хэмжээтэй цээж зураг', 'Сүүлийн 6н сарын хугацаанд авхуулсан байх шаардлагатай', 'file', NULL, 'png, jpg, jpeg', 'Y', 'N', '2023-02-01 00:00:00.000', '2023-02-01 00:00:00.000', NULL);
INSERT INTO `tergel-db`.tb_material_detail
(material_detail_id, material_id, material_name, material_descr, material_type, material_source_id, allow_file_ext, use_yn, del_yn, createdAt, updatedAt, deletedAt)
VALUES('5bfd7fd6-cc77-4e0d-9244-d5ab39f866ff', '57c4d28a-275c-4957-a16e-70d4e5573071', 'Гадаад пасспорт/Хуулбар 1 хувь', 'Гадаад пасспорт хуулбарын хамт', 'file', NULL, 'png, jpg, jpeg', 'Y', 'N', '2023-02-01 00:00:00.000', '2023-02-01 00:00:00.000', NULL);

