-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS nestjs_auth CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- 사용자 생성 및 권한 부여
CREATE USER IF NOT EXISTS 'auth'@'%' IDENTIFIED BY 'Idjgaiejrg@%4590rjg';
GRANT ALL PRIVILEGES ON nestjs_auth.* TO 'auth'@'%';
FLUSH PRIVILEGES;