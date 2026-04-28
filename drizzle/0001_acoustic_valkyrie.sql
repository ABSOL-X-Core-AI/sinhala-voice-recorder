CREATE TABLE `batchSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`recordingCount` int NOT NULL,
	`status` enum('pending','in_review','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `batchSubmissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `phonemes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`phonemeId` varchar(64) NOT NULL,
	`targetPhoneme` varchar(128) NOT NULL,
	`script` longtext NOT NULL,
	`category` varchar(128) NOT NULL,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `phonemes_id` PRIMARY KEY(`id`),
	CONSTRAINT `phonemes_phonemeId_unique` UNIQUE(`phonemeId`)
);
--> statement-breakpoint
CREATE TABLE `recordings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`phonemeId` int NOT NULL,
	`userId` int NOT NULL,
	`status` enum('Pending','Recorded','Approved','Passed','Deleted') NOT NULL DEFAULT 'Pending',
	`fileKey` varchar(512),
	`duration` decimal(10,2),
	`sampleRate` int,
	`reviewNotes` longtext,
	`reviewedBy` int,
	`reviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `recordings_id` PRIMARY KEY(`id`)
);
