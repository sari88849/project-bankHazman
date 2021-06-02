create database LoveToLerning
use LoveToLerning

CREATE TABLE [dbo].[Useres]
(
	[CodeUser] int identity(1,1) primary key NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[DateOfBirth] [date] NULL,
	[Mail] [nvarchar](50) NOT NULL,
	[Phone] [smallint] NOT NULL,
	[CodeStreet] int NOT NULL
)
create table dbo.Streets
(
    [CodeStreet] int identity(1,1) primary key  NOT NULL,
	CodeCity int NOT NULL
)
create table dbo.Cities
(
CodeCity int identity(1,1) primary key NOT NULL,
NameCity [nvarchar](50) NULL
)
create table dbo.Limit 
(
CodeLimit int identity(1,1) primary key NOT NULL,
NameLimit nvarchar(50) NULL,
CodeParentLimit int NOT NULL
) 
create table LimitToTeacher
(
CodeLimitToTeacher int identity(1,1)  primary key  NOT NULL,
CodeLimit int NOT NULL,
CodeTeacher int NOT NULL,
TryYear float NULL
constraint FK_LimitToTeacher unique(CodeLimit,CodeTeacher)
)
create table DiplomasToLimitToTeacher
(
CodeDiplomaToLimitToTeacher int identity(1,1) primary key NOT NULL,
CodeLimitToTeacher int NOT NULL,
CodeDiploma int NOT NULL
)
create table Diploma(
CodeDiploma int identity(1,1) primary key NOT NULL,
NameDiploma nvarchar(50) NULL
)
create table TryToLimitToTeacher
(
CodeTryToLimitToTeacher int identity(1,1) primary key NOT NULL,
CodeLimitToTeacher int NOT NULL,
NamePlaceTeach nvarchar(50) NULL,
MailRecommend   nvarchar(50) NOT NULL,
PhoneRecommend   [smallint] NOT NULL
)
create table Recommendation
(
CodeRecommendation int identity(1,1) primary key NOT NULL,
CodeLimitToTeacher int NOT NULL,
RecommendationText nvarchar(100) NULL
)  
create table Lessons
(
CodeLesson int identity(1,1) primary key NOT NULL,
CodeLimit int NOT NULL,
CodeTeacher int NOT NULL,
CodeStudent int NULL,
Costing money NULL,
PlayedForTime time NULL 
)
create table Request 
(
CodeRequest int identity(1,1) primary key NOT NULL,
CodeStudent int NOT NULL,
CodeLimit int NOT NULL,
MaxCosting money NULL,
PlayedForTime time NULL
)